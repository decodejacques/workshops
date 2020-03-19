CREATE TABLE username_pwd(
   username VARCHAR(36) NOT NULL PRIMARY KEY,
   pwd VARCHAR(36) NOT NULL
);

CREATE TABLE post(
   post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   descr TEXT NOT NULL,
   frontend_path VARCHAR(64)
)

INSERT INTO username_pwd(username, pwd) VALUES ("bob","pwd123")