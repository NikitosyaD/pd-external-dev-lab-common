import React from 'react';
import { Button, message } from "antd";
import { LoginOutlined } from '@ant-design/icons';

import firebase from "firebase/app";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import store from "../redux/store";
import { authAPI } from "../api/api";

// Todo: add babel config to be able use styled components in runtime
// https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack
// import { styled } from '@linaria/react';

const Styles = {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'center'
}


// for message component watch antd Update Message Content (https://ant.design/components/message/)
const key = 'updatable';

class Login extends React.Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "../static/js/main.js";
  //   script.async = true;
  //   script.onload = () => this.scriptLoaded();
  //
  //   document.body.appendChild(script);
  //
  // }
  render() {

    let is_teacher = false;

    function onChange(e) {
      is_teacher = e.target.checked;
    }

    const signInWithGoogle = () => {
      // const provider = new firebase.auth.GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          message.success({ content: `Hi ${user.displayName}`, key });
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn(errorMessage);
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      // auth.signInWithPopup(provider)
      //   .then(function (result) {
      //     let user = result.user;

      //     // console.log(user.email);
      //     // console.log(user.displayName);
      //     // console.log(user.uid);
      //     authAPI.login(user.uid, user.email);

      //     // Эти данные должный отправиться на эндпоинт POST http://194.67.110.179:5000/auth
      //     // Параметры email=user.email fullname=user.displayName googleuid=user.uid

      //     // если такой юзер есть то вернёт его uid(с бека), через который далее можно получить все прочие данные по апи.
      //     // если такой такого нет, то он его добавит и по хорошему потом перезайти в аккаунт чтобы всё подгрузилось, ну или замутить свою подгрузку(пока забей).
      //     // Главное сам запрос сделать чтобы работало

      //     store.dispatch({ type: "USER/SET_UID", data: user.uid })
      //     message.success({ content: `Hi ${user.displayName}`, key });
      //   })
      //   .catch(function (error) {
      //     console.error(error.message)
      //     message.error('Login error');
      //   });
    }

    return (
      <div style={Styles}>
        <Button type="primary" size="large" icon={<LoginOutlined />} onClick={signInWithGoogle}>LogIn</Button>
      </div>
    )
  }
}

export default Login;