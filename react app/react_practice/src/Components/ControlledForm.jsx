import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("all field are required ");
      return;
    }
    console.log("formData", formData);
    alert("formData Submitted");
  };

  return (
    <div
      className="outer"
      style={{ maxWidth: "300px", margin: "auto", color: "red" }}
    >
      <h1>Controlled form Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
