import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "UNIKAT API deluje!",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    project: "UNIKAT",
  });
});

app.listen(PORT, () => {
  console.log(`UNIKAT API posluša na portu ${PORT}`);
});