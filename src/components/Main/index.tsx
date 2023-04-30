import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/next.svg"
      alt="Image containing NextJS Logo"
    />
    <S.Title>BoilerPlate</S.Title>
    <S.Description>
      ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Description>
      TypeScript, Jest and Testing Library
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustration of a developer sitted in front of a screen full of code"
    />
  </S.Wrapper>
);

export default Main;