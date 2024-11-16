import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dataBase from "./server/dataBase.js";
import dateRoutes from "./routes/dateRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Register routes
app.use("/api/dates", dateRoutes);

//database
dataBase
  .getConnection()
  .then((connection) => {
    console.log("Database connection successfully!!!");
    connection.release();
  })
  .catch((err) => {
    console.error("MySQL connection error: ", err.message);
  });

// Start the server
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
