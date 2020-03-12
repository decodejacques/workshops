import React, { useState, useRef } from 'react'; 
import { 
  Text, 
  Button, 
  ScrollView, 
  TextInput, 
  SafeAreaView, 
  StatusBar, 
  KeyboardAvoidingView, 
} from 'react-native' 
import produce from 'immer' 
export default function App() { 
  const [state, setState] = useState({ items: [], current: "" }) 
  const textChangeHandler = str => { 
    setState(state => produce(state, st => { 
      st.current = str 
    })) 
  } 
  const scrollviewRef = useRef(null) 
  return ( 
    <SafeAreaView 
      style={{ 
        flex: 1, 
        paddingTop: StatusBar.currentHeight 
      }}> 
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}> 
        <ScrollView 
          onContentSizeChange={() => { 
            scrollviewRef.current.scrollToEnd() 
          }} 
          ref={scrollviewRef}> 
          {state.items.map(item => {   
            return <Text>{item}</Text> 
          })} 
        </ScrollView> 
        <TextInput 
          style={{ borderWidth: 1, borderStyle: "solid", borderColor: "black" }}  
          onChangeText={textChangeHandler} 
          value={state.current} /> 
        <Button 
          onPress={() => { 
            setState(state => produce(state, st => { 
              st.items.push(st.current) 
            })) 
          }} 
          title="Add" /> 
      </KeyboardAvoidingView> 
    </SafeAreaView> 
  ) 
} 