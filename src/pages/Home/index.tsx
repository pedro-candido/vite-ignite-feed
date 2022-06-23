import { Post } from "src/components";
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Post
        author={{ job: "Software Developer", name: "Pedro Candido" }}
        publishTime={new Date()}
      >
        <h1>Titulo</h1>
      </Post>
    </Container>
  );
};

export default Home;
