import { useState, useEffect } from "react";
import { Logo, FormData, Alert } from "../components";
import Wrapper from "../assets/wrappers/Reg_LoginWrapper";
import { useContextApp } from "../context/contextApp";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert } = useContextApp();

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name field */}
        {!values.isMember && (
          <FormData
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormData
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormData
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        {/* email field */}
        <button type="button" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
