import { useGetConversation } from "@/hooks/useConversation";
import { Skeleton } from "antd";
import Conversation from "../Conversation";
import { useListenConversation } from "@/hooks/useListen";

const FriendList = () => {
    const { loading, conversations } = useGetConversation();
    useListenConversation();
   
    return loading ? (
        <Skeleton active round avatar />
    ) : (
        conversations?.map((c: any) => <Conversation key={c?._id} conversation={c} />)
    );
}
export default FriendList;