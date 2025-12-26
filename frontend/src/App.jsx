import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then(r => r.json()).then(d => setMsg(d.msg));
  }, []);
  return <h1>{msg}</h1>;
}