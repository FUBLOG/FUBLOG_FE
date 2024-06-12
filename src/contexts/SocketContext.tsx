import React, { createContext, useState, ReactNode, useEffect } from "react";
import { socket } from "@/utils/socket";

interface Socket {
  connected: boolean;
  transport: string;
}

export const SocketContext = createContext<Socket>({
  connected: false,
  transport: "N/A",
});
export const SocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  return (
    <SocketContext.Provider value={{ connected: isConnected, transport }}>
      {children}
    </SocketContext.Provider>
  );
};
