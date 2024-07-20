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
  post: any;
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
  const searchParams = useSearchParams();
  const paramComment = searchParams.get("ctId");

  const postId = searchParams.get("ptId");

  const [comments, setComments] = useState<{ [key: string]: number }>({});
  const icrComment = (postId: string, number: number) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: (prevComments[postId] || 0) + number,
    }));
  };
  const handleCloseCommentsModal = () => {
    if (isOpenByComment) {
      router.back();
    } else {
      router.push("/");
    }
    setShowCommentsModal(false);
  };

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

      const initialComment = postNotNull?.reduce((acc: any, post: any) => {
        acc[post?.post._id] = post?.post?.commentCount || 0;
        return acc;
      }, {});
      setComments(initialComment);
      setLoading(false);
    };

    asyncGetPosts();
    if (post) {
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
          icrComment={icrComment}
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
                key={post?.post?._id}
                newfeed={post}
                updatePost={updatePostInList}
                postId={postId}
                paramComment={paramComment}
                setShowCommentsModal={setShowCommentsModal}
                setIsOpenByComment={setIsOpenByComment}
                comment={comments[post?.post?._id] || 0}
              />
            ) : (
              <></>
            )
          )}
          {commentModal}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PostsRender;
