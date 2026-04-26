import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`)
      .then(res => setProperties(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>PMS Listings</h1>

      {properties.map(p => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>KES {p.price}</p>
        </div>
      ))}
    </div>
  );
}
