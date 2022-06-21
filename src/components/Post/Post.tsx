import {
  Author,
  Container,
  Divider,
  Feedback,
  Header,
  PublishedAt,
} from "./Post.styles";

import i18n from "@i18n";
import { publishedAgo } from "src/utils/date";

interface AuthorProps {
  name: string;
  job: string;
}

interface PostProps {
  author: AuthorProps;
  children: React.ReactNode;
  publishTime: Date;
}

const Post = ({ author, publishTime, children }: PostProps) => {
  console.log(publishTime);

  return (
    <Container>
      <Header>
        <img src="" />
        <div>
          <Author.Name>{author.name}</Author.Name>
          <Author.Job>{author.job}</Author.Job>
        </div>
        <PublishedAt>
          <>
            {i18n.t("publishedAt")} {publishedAgo(publishTime)}
          </>
        </PublishedAt>
      </Header>
      <div>{children}</div>
      <Divider />
      <Feedback.Container>
        <Feedback.Title></Feedback.Title>
        <Feedback.TextArea></Feedback.TextArea>
        <Feedback.Button>
          <>{i18n.t("publish")}</>
        </Feedback.Button>
      </Feedback.Container>
    </Container>
  );
};

export default Post;
