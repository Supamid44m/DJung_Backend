import { BaseInterface } from "../common/base.interface";

export interface IProfile extends BaseInterface {
  profileImage: string | null;
  profileBanner: string | null;
  firstName: string | null;
  lastName: string | null;
  nickName: string | null;
  socialMedia: { platform: string; url: string }[];
}
