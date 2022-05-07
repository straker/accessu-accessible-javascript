export type User = {
  name: string;
  handle: string;
  link: string;
  profile: string;
}

export type Message = {
  id: number;
  user: User;
  timestamp: string;
  message: string;
  comments: Message[];
  likes: number;
  sympathy: number;
  shares: number;
}