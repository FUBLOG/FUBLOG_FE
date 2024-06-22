import { useEffect, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { getPostForGuest, getPostForUser } from "@/services/api/post";
import { Skeleton } from "antd";

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
    }, []);

    return loading ? <Loading /> : (
        listPosts.map((post: any) => (
            <Post
                key={post?._id}
                user={post?.userId?.displayName}
                avatar={post?.userId?.userInfo?.avatar}
                content={post?.post?.postContent}
                images={post?.post?.postLinkToImages}
                tags={post?.post?.postTagID?.postTagContent}
                initialLikes={post?.post?.countLike}
                initialComments={post?.post?.commentCount}
            />
        ))
    );
}
const Loading = () => {
    return <Skeleton active round avatar title />;
}
export default PostsRender;