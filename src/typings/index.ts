export interface AuthorProps {
  name: string;
  job: string;
  img: string;
}

export interface CommentProps {
  author: AuthorProps;
  likes: number;
}
