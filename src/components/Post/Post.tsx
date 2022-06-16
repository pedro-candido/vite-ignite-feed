import {
  Author,
  Container,
  Divider,
  Feedback,
  Header,
  PublishedAt,
} from "./Post.styles";

import { AuthorProps, CommentProps } from "../../typings";

import t from "../../translate/i18n";

interface PostProps {
  author: AuthorProps;
  content: React.ReactNode;
  comments: CommentProps[];
  publishTime: Date;
}

const Post = ({ author, publishTime, content, comments }: PostProps) => {
  return (
    <Container>
      <Header>
        <img src="" />
        <div>
          <Author.Name>{author.name}</Author.Name>
          <Author.Job>{author.job}</Author.Job>
        </div>
        <PublishedAt>Publicado há {String(publishTime)}</PublishedAt>
      </Header>
      <div>{content}</div>
      <Divider />
      <Feedback.Container>
        <Feedback.Title></Feedback.Title>
        <Feedback.TextArea></Feedback.TextArea>
        <Feedback.Button>{t("publish")}</Feedback.Button>
      </Feedback.Container>
    </Container>
  );
};
