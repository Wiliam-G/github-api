import React from "react";
import * as S from "../profile/styled";

const Profille = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage src="" alt="user avatar" />

      <S.WrapperInfoUser>

      <div>
        <h1>Username</h1>
        <S.WrapperUserName>
        <h3>username: </h3>
        <a href="" target="_blank" rel="noreferrer">username</a>
        </S.WrapperUserName>
      
      </div>

      <S.WrapperStatusCount>
        <div>
          <h4>followers</h4>
          <span>5</span>
        </div>
        <div>
          <h4>following</h4>
          <span>5</span>
        </div>
        <div>
          <h4>starreds</h4>
          <span>5</span>
        </div>
      </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profille;
