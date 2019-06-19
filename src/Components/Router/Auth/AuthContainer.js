import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../../Hooks/useInput";

const AuthContainer = () => {
  const [action, setAction] = useState("signUp");
  const username = useInput("");
  const password = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");

  const onSubmit = e => e.preventDefault();

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      password={password}
      email={email}
      firstName={firstName}
      lastName={lastName}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
