import React, { useState } from "react";

import axios from "axios";

const Register = () => {

const [user, setUser] = useState({ name: "", email: "", password: "" });

const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {

e.preventDefault();

try {

const res = await axios.post("http://localhost:5000/api/auth/register", user);

alert(res.data.message);

} catch (err) {

alert(err.response.data.error);

}

};

return (

<form onSubmit={handleSubmit}>

<input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />

<input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />

<input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />

<button type="submit">Register</button>

</form>

);

};

export default Register;