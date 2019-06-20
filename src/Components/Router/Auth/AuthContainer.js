import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQuery";

const AuthContainer = () => {
  const [action, setAction] = useState("signUp");
  const username = useInput("");
  const password = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const onSubmit = e => {
    e.preventDefault();
    if (email !== "") {
      requestSecret();
    }
  };

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
