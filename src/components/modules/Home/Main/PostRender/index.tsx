import { useEffect, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton, Space, Spin } from "antd";
import { getPostForGuest, getPostForUser } from "@/services/api/post";
import useCreatePost from "@/hooks/useCreatePost";
import { LoadingOutlined } from "@ant-design/icons";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";

const PostsRender = ({ postId }: any) => {
  const [listPosts, setListPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showSpinner, post, setPost } = useCreatePost();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const asyncGetPosts = async () => {
      setLoading(true);
      if (!webStorageClient.get(constants.IS_AUTH)) {
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
    };
    asyncGetPosts();
    if (post) {
      setListPosts([
        {
          ...post,
          userId: userInfo,
        },
        ...listPosts,
      ]);
      setPost(null);
    }
  }, [userInfo?._id, post]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {showSpinner && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Space>
            <Spin
              className="custom-spin"
              indicator={
                <LoadingOutlined color="#ccc" style={{ fontSize: 30 }} spin />
              }
            />
            <h4 style={{ color: "#ccc" }}>Đang tạo bài viết</h4>
          </Space>
        </div>
      )}
      {listPosts?.map((post: any) => (
        <Post newfeed={post} key={post._id} postId={postId} />
      ))}
    </>
  );
};
const Loading = () => {
  return <Skeleton active round avatar title />;
};
export default PostsRender;
