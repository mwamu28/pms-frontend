import { useState } from "react";
import axios from "axios";

export default function Add() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: ""
  });

  const submit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`, form);
    alert("Added!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Property</h1>

      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} /><br/>
      <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} /><br/>
      <input placeholder="Location" onChange={e => setForm({...form, location: e.target.value})} /><br/>

      <button onClick={submit}>Submit</button>
    </div>
  );
}
