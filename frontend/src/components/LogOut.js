import React from 'react';
import { Button, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

// import firebase from "firebase/app";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

// for message component watch antd Update Message Content (https://ant.design/components/message/)
const key = 'updatable';

function LogOut() {

    //TODO make Messsages of log in successful or not
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            message.success({ content: 'Bye bye', key });
        }).catch((error) => {
            // An error happened.
            message.error('Logout error');
            console.warn(error);
        });
        // firebase.auth().signOut().then(function () {
        //     message.success({ content: 'Bye bye', key });
        // }).catch(function (error) {
        //     message.error('Logout error');
        // });
    }



    return (
        <Button icon={<LogoutOutlined />} onClick={logOut}>LogOut</Button>
    );
}

export default LogOut;
