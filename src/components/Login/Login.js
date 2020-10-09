import React from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../contextAPI/StateProvider";
import { actionTypes } from "../../contextAPI/reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        })
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src={logo} alt="Slack Logo" />
        <h1>Sign In To Yarzai Slack</h1>
        <p>yarzai.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
