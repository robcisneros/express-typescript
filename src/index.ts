import express from "express";
import router from "./routes/diaries";

const app = express();
app.use(express.json()); //middleware que transforma la req.body a  un json

const PORT = 3000;

app.get("/ping", (_, res) => {
  console.log("someone pinged here!");
  res.send("pong");
});

app.use("/api/diaries", router);

app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});
