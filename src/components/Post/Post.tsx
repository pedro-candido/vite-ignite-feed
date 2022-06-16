import {
  Author,
  Container,
  Divider,
  Feedback,
  Header,
  PublishedAt,
} from "./Post.styles";

import t from "../../translate/i18n";

interface Author {
  name: string;
  job: string;
}

interface PostProps {
  author: Author;
  children: React.ReactNode;
  publishTime: Date;
}

const Post = ({ author, publishTime, children }: PostProps) => {
  return (
    <Container>
      <Header>
        <img src="" />
        <div>
          <Author.Name>{author.name}</Author.Name>
          <Author.Job>{author.job}</Author.Job>
        </div>
        <PublishedAt>Publicado há {publishTime}</PublishedAt>
      </Header>
      <div>{children}</div>
      <Divider />
      <Feedback.Container>
        <Feedback.Title></Feedback.Title>
        <Feedback.TextArea></Feedback.TextArea>
        <Feedback.Button>{t("publish")}</Feedback.Button>
      </Feedback.Container>
    </Container>
  );
};
