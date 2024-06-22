
export interface FriendRequestResponse {
  metadata?: {
    sourceID: string;
  };
};
export interface ProfileRequestResponse {
  metadata?: 
  {
    avatar: string;
      displayName: string;
      friendCount: number;
      profileHash: string;
      _id: string;
    }[]
  };
};

