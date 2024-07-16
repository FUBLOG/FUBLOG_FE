import { useEffect, useMemo, useState } from "react";
import Post from "../../Post";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton, Space, Spin } from "antd";
import { getPostForGuest, getPostForUser } from "@/services/api/post";
import useCreatePost from "@/hooks/useCreatePost";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useRouter, useSearchParams } from "next/navigation";
import CommentModal from "../../Post/Comment";
import useTagStageStore from "@/hooks/useTags";

const PostsRender = () => {
  const [listPosts, setListPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showSpinner, post, setPost } = useCreatePost();
  const router = useRouter();
  const { userInfo } = useAuthContext();
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [isOpenByComment, setIsOpenByComment] = useState(false);
  const tagValue = useTagStageStore((state) => state.tagValue);
  const handleCloseCommentsModal = () => {
    if (isOpenByComment) {
      router.back();
    } else {
      router.push("/");
    }
    setShowCommentsModal(false);
  };
  const searchParams = useSearchParams();
  const postId = searchParams.get("ptId");
  const paramComment = searchParams.get("ctId");

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
    setLoading(false);
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

  useEffect(() => {
    if (postId !== null) {
      setShowCommentsModal(true);
    }
  }, [searchParams]);

  const commentModal = useMemo(() => {
    if (!showCommentsModal) return null;
    return (
      <CommentModal open={showCommentsModal} close={handleCloseCommentsModal} />
    );
  }, [showCommentsModal, postId, handleCloseCommentsModal, paramComment]);

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
        <InfiniteScroll
          dataLength={listPosts?.length}
          next={getMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {listPosts?.map((post: any, index: number) =>
            tagValue === "Tất Cả" || post?.post?.postTagID?.postTagContent === tagValue ? (
              <Post
                key={post?._id}
                newfeed={post}
                postId={postId}
                paramComment={paramComment}
                setShowCommentsModal={setShowCommentsModal}
                setIsOpenByComment={setIsOpenByComment}
              />
            ) : null
          )}
          {commentModal}
        </InfiniteScroll>
      </div>
    </>
  );
};

const Loading = () => {
  return <Skeleton active round avatar title />;
};

export default PostsRender;
