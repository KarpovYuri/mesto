export interface ICard {
  _id: number;
  link: string;
  name: string;
  owner: { _id: number };
  likes: [];
}
