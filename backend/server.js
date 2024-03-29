import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connecttoMongoDb from "./db/connecttoMongoDB.js";

import {server,io, app } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  connecttoMongoDb();
  console.log(`server in this port is connected ${PORT}`);
});
