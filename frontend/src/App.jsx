import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then(r => r.json()).then(d => setMsg(d.msg));
  }, []);
  return <h1>{msg}</h1>;
}