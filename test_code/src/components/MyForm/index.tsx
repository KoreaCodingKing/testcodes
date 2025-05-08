"use client";

import { useState } from "react";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });
  const [error, setError] = useState("");

  const validateForm = () => {
    const { id, name, email, age } = formData;

    if (id.length < 4) {
      return "ID must be at least 4 characters long.";
    }
    if (name.length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Email must be in a valid format.";
    }
    if (Number(age) < 1) {
      return "Age must be at least 1.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">id</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <button type="submit">submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default MyFormComponent;
