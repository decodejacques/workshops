import React, { useState } from 'react'; 
import { 
  View, 
  TextInput, 
  Button, 
  Text 
} from 'react-native' 
import produce from 'immer' 
export default function App() { 
  const [state, setState] = useState({ items: [], current: "" }) 
  const textChange = str => { 
    setState(state => produce(state, st => { 
      st.current = str 
    })) 
  } 
  return ( 
    <View style={{ paddingTop: 100 }}> 
      {state.items.map(item => { 
        return <Text>{item}</Text> 
      })} 
      <TextInput 
        style={{ borderWidth: 1, borderStyle: "solid", borderColor: "black" }} 
        onChangeText={textChange} 
        value={state.current} 
      />  
      <Button 
        onPress={() => { 
          setState(state => produce(state, st => { 
            st.items.push(st.current) 
          })) 
        }} 
        title="Add" 
      /> 
    </View> 
  ); 
} 