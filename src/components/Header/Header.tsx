import React from "react";
import * as S from "./Header.styles";
import igniteFeed from "../../assets/ignite_feed.svg";

const Header = () => {
  return (
    <S.Container>
      <S.Logo src={igniteFeed} />
    </S.Container>
  );
};

export default Header;
