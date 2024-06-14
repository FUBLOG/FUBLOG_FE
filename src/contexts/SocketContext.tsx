import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { Socket, io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

interface SocketContextProps {
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
  userOnline: string[];
  setUserOnline: (userOnline: string[]) => void;
}

export const SocketContext = createContext<SocketContextProps>({
  socket: {} as Socket,
  setSocket: () => { },
  userOnline: [],
  setUserOnline: () => { }
});
export const useSocketContext = () => {
  return useContext(SocketContext);
}
export const SocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userOnline, setUserOnline] = useState<string[]>([]);
  const { userInfo } = useAuthContext();
  useEffect(() => {
    if (userInfo !== null) {

      const socket = io("https://has.io.vn", {
        query: {
          userId: userInfo._id
        }
      });
      setSocket(socket);
      socket.on("getOnlineUsers", async (data: string[]) => {
        setUserOnline(data);
      })


      return () => {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      };
    }

  }, [userInfo]);


  const socketContextValueWithUserOnline = useMemo(
    () => ({ socket, setSocket, userOnline, setUserOnline }),
    [socket, setSocket, userOnline, setUserOnline]
  );


  return (
    <SocketContext.Provider value={socketContextValueWithUserOnline}>
      {children}
    </SocketContext.Provider>
  );
};
