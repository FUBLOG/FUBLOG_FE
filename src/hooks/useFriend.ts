import { metadata } from "./../app/layout";
import { getFriendList } from "@/services/api/friend";
import { useEffect, useState } from "react";

const useGetFriendList = () => {
  const [friendList, setFriendList] = useState<any[]>([]);
  useEffect(() => {
    getFriendList().then((list: any) => setFriendList(list?.metadata?.friendList));
  }, []);
  return friendList;
};

export { useGetFriendList };
