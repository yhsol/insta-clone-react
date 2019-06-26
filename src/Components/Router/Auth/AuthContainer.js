import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET } from "./AuthQuery";
import { toast } from "react-toastify";

const AuthContainer = () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const email = useInput("yhsol1592@gmail.com");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: secret.value,
      email: email.value
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          console.log(requestSecret);
          if (!requestSecret) {
            toast.error("You need to account!");
            setTimeout(() => setAction("signUp"), 2000);
          } else {
            toast.success("Check Your Email!");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again!");
        }
      } else {
        toast.error("Email is required!");
      }
    } else if (action === "signUp") {
      if (
        username.value !== "" &&
        email.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Cat't create account, try again!");
          } else {
            toast.success("Account created! Log In!");
            setTimeout(() => setAction("logIn"), 2000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All filed are required!");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret }
          } = await confirmSecretMutation();
          console.log(confirmSecret);
          // check confirm secret
          // * secret.value === confirmSecret.value ? *
        } catch {
          toast.error("Can't confirm secret");
        }
      }
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
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
