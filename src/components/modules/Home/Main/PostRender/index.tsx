import { useEffect, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton, Space, Spin } from "antd";
import { getPostForGuest, getPostForUser } from "@/services/api/post";
import useCreatePost from "@/hooks/useCreatePost";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from 'react-infinite-scroll-component';
import useTags from "@/hooks/useTags";
const PostsRender = () => {
  const [listPosts, setListPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { showSpinner, post, setPost } = useCreatePost();
  const { activeTag } = useTags();
  const { userInfo } = useAuthContext();
  const getMore = async () => {
    const lastPost = listPosts[listPosts.length - 1];
    if (userInfo?._id === "") {
      await getPostForGuest(activeTag).then((res: any) => {
        setListPosts(listPosts.concat(res?.metadata));
      });
      if (lastPost === listPosts[listPosts.length - 1]) {
        setHasMore(false);
      }
    } else {
      await getPostForUser(activeTag).then((res: any) => {
        setListPosts(listPosts.concat(res?.metadata));
        if (lastPost === listPosts[listPosts.length - 1]) {
          setHasMore(false);
        }
      });
    }

  };
  useEffect(() => {
    const asyncGetPosts = async () => {
      setLoading(true);
      if (userInfo?._id === "") {
        await getPostForGuest(activeTag).then((res: any) => {
          if(res?.metadata.length === 0) {
            setHasMore(false);
          }
          setListPosts(res?.metadata);
          setLoading(false);
        });
      } else {
        await getPostForUser(activeTag).then((res: any) => {
          if(res?.metadata.length === 0) {
            setHasMore(false);
          }
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
  }, [userInfo?._id, post, activeTag]);

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
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/*Put the scroll bar always on the bottom*/}
        <InfiniteScroll
          dataLength={listPosts?.length} //This is important field to render the next data
          next={getMore}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Bạn đã xem hết bài viết</b>
            </p>
          }
        // below props only if you need pull down functionality

        >
          {listPosts?.map((post: any, index: number) => (
            <Post key={post?._id} newfeed={post} />
          ))
          }
        </InfiniteScroll>
      </div>
    </>
  );
};
const Loading = () => {
  return <Skeleton active round avatar title />;
};
export default PostsRender;
