export interface IPost{
  id: number;
  title: string;
  message: string;
  date: string;
  userId: number;
}

export interface IPostCreate {
  title: string;
  message: string;
  createdAt: number;
  userId: number;
}
