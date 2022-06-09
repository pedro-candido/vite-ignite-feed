import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Logo = styled.img``;

export { Container, Logo };
