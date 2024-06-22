import { useEffect, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton } from "antd";
import { getPostForGuest, getPostForUser } from "@/services/api/post";

const PostsRender = () => {
    const [listPosts, setListPosts] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { userInfo } = useAuthContext();
    useEffect(() => {
        const asyncGetPosts = async () => {
            setLoading(true);
            if (userInfo?.userId === "") {
                await getPostForGuest().then((res: any) => {
                    setListPosts(res?.metadata);
                    setLoading(false);
                });
            } else {
                await getPostForUser().then((res: any) => {
                    setListPosts(res?.metadata);
                    setLoading(false);
                });
            }
        }
        asyncGetPosts();
    }, [userInfo?.userId]);

    return loading ? <Loading /> : (
        listPosts.map((post: any) => (
            <Post
                newfeed={post}
                key={post._id}
            />
        ))
    );
}
const Loading = () => {
    return <Skeleton active round avatar title />;
}
export default PostsRender;