import { message } from "antd";
export interface FriendRequestResponse {
  metadata?: {
    sourceID: string;
  };
}
export interface ProfileRequestResponse {
  avatar: string;
  displayName: string;
  friendCount: number;
  profileHash: string;
  _id: string;
}
export interface ProfileRequestResponseList {
  message: string;
  statusCode: number;
  metadata?: {
    avatar: string;
    displayName: string;
    friendCount: number;
    profileHash: string;
    _id: string;
  }[];
}
