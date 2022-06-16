import { Background, Container, Divider, Profile } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Container>
      <Background />
      <Profile.ImageContainer>
        <Profile.Image />
      </Profile.ImageContainer>
      <Profile.TextContainer>
        <Profile.Name>John Doe</Profile.Name>
        <Profile.Job>UX Designer</Profile.Job>
      </Profile.TextContainer>
      <Divider />
      <Profile.EditButton>Editar seu perfil</Profile.EditButton>
    </Container>
  );
};

export default Sidebar;
