import { message } from "antd";
export interface FriendRequestResponse {
  metadata?: {
    sourceID: string;
  };
}
export interface ProfileRequestResponse {
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
