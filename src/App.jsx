import { useState } from "react";
import "./App.css";
import FormInput from "./formInputs/FormInput";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    Birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errormessage: "It should be under the range of 3-16",
      pattern: "^[A-Za-z][A-Za-z0-9_]{3,29}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errormessage: "It should be a valid email",
      pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      required:true
    },
    {
      id: 3,
      name: "Birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",

    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errormessage: "It should be under the range of 8-16",
      pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$",
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errormessage: "It should be same as password",
      pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$",
      required:true
    },
  ];
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => 
          <FormInput
            key={input.id}
            {...input}
            value={values[input.username]}
            onChange={handleChange}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
