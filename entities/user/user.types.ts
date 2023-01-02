
export type IUser = {
  id: number;
  email: string;
  name?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  userAvatar?: IUserAvatar;
};

interface IUserAvatar {
  id: number;
  url: string;
}
