export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: ProfileImage;
}

export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Image {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  urls: ImageUrls;
  links: {
    self: string;
    html: string;
    download: string;
  };
}
