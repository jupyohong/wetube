import app from "./app.js";

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
