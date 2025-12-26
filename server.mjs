import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api/hello", (req, res) => {
  res.json({ msg: "Hello from backend" });
});






app.use(express.static(path.join(__dirname, "frontend/dist")));

// app.get("/*", (_, res) => {
//   res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
// });
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

app.listen(3000, () => console.log("API on :3000"));