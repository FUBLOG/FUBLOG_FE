import { useEffect, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton, Space, Spin } from "antd";
import { getPostForGuest, getPostForUser } from "@/services/api/post";
import useCreatePost from "@/hooks/useCreatePost";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";

const PostsRender = ({ postId, paramComment }: any) => {
  const [listPosts, setListPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showSpinner, post, setPost } = useCreatePost();
  const { userInfo } = useAuthContext();
  const getMore = async () => {
    setLoading(true);
    if (userInfo?._id === "") {
      await getPostForGuest().then((res: any) => {
        setListPosts(listPosts.concat(res?.metadata));
      });
    } else {
      await getPostForUser().then((res: any) => {
        setListPosts(listPosts.concat(res?.metadata));
      });
    }
  };
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

  return (
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

      <div
        id="scrollableDiv"
        style={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*Put the scroll bar always on the bottom*/}
        <InfiniteScroll
          dataLength={listPosts?.length} //This is important field to render the next data
          next={getMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          {listPosts?.map((post: any, index: number) => (
            <Post
              key={post?._id}
              newfeed={post}
              postId={postId}
              paramComment={paramComment}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};
const Loading = () => {
  return <Skeleton active round avatar title />;
};
export default PostsRender;
