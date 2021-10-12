import React, { useState } from "react";
import {signup} from './api';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({email, password, name, gender});
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            {" "}
            Email:
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            {" "}
            Password:
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            Name:
            <input
              className="input"
              id="name"
              type="name"
              name="name"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
        <p className="control has-icons-left">
          Select:
          <select name="gender" id="gender" onChange={(e) => {
            setGender(e.target.value)}}>
            <option value="select" selected disabled>Choose one</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
          </select>
        </p>
      </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">Submit</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export { SignUp };
