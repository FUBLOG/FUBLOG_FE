import React, { useEffect, useMemo, useState } from "react";
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
import useThemeStore from "@/hooks/useTheme";

interface PostData {
  _id: string;
  post: {
    postTagID: {
      postTagContent: string;
    };
  };
}

const PostsRender = () => {
  const [listPosts, setListPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showSpinner, post, setPost } = useCreatePost();
  const router = useRouter();
  const { userInfo } = useAuthContext();
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [isOpenByComment, setIsOpenByComment] = useState(false);
  const tagValue = useTagStageStore((state) => state.tagValue);
  const darkmode = useThemeStore((state) => state.darkMode);
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

  const updatePostInList = (updatedPost: PostData) => {
    setListPosts((currentPosts) =>
      currentPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      )
    );
  };

  const getMore = async () => {
    setLoading(true);
    const func = userInfo?._id === "" ? getPostForGuest : getPostForUser;
    const res = await func();
    const postNotNull = res?.metadata?.filter(
      (post: any) => post?.post !== null
    );

    setListPosts((prev) => [...prev, ...postNotNull]);
    setLoading(false);
  };

  useEffect(() => {
    const asyncGetPosts = async () => {
      setLoading(true);
      const res = !webStorageClient.get(constants.IS_AUTH)
        ? await getPostForGuest()
        : await getPostForUser();
      const postNotNull = res?.metadata.filter(
        (post: any) => post?.post !== null
      );
      setListPosts(postNotNull || []);
      setLoading(false);
    };
    asyncGetPosts();
    if (post) {
      console.log("post", post);

      setListPosts((prevPosts) => [
        { ...post, userId: userInfo },
        ...prevPosts,
      ]);
      setPost(null);
    }
  }, [userInfo?._id, post]);

  useEffect(() => {
    if (postId !== null) {
      setShowCommentsModal(true);
    }
  }, [searchParams]);

  const commentModal = useMemo(
    () =>
      showCommentsModal ? (
        <CommentModal
          open={showCommentsModal}
          close={handleCloseCommentsModal}
        />
      ) : null,
    [showCommentsModal, handleCloseCommentsModal]
  );

  return (
    <>
      {showSpinner && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Space>
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />}
            />
            <h4 style={{ color: darkmode ? "#F7D600" : "000" }}>
              Đang tạo bài viết
            </h4>
          </Space>
        </div>
      )}

      <div
        id="scrollableDiv"
        style={{ overflow: "auto", display: "flex", flexDirection: "column" }}
      >
        <InfiniteScroll
          dataLength={listPosts?.length}
          next={getMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! Bạn đã xem hết bài viết</b>
            </p>
          }
        >
          {listPosts?.map((post) =>
            tagValue === "Tất Cả" ||
            post?.post?.postTagID?.postTagContent === tagValue ? (
              <Post
                key={post._id}
                newfeed={post}
                updatePost={updatePostInList}
                postId={postId}
                paramComment={paramComment}
                setShowCommentsModal={setShowCommentsModal}
                setIsOpenByComment={setIsOpenByComment}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <b>Yay! Bạn đã xem hết bài viết</b>
              </div>
            )
          )}
          {commentModal}
        </InfiniteScroll>
      </div>
    </>
  );
};

const Loading = () => <Skeleton active round avatar title />;

export default PostsRender;
