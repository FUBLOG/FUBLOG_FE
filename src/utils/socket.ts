"use client";

import { io } from "socket.io-client";
const URL: string | undefined =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
export const socket = io(URL as string, undefined);
