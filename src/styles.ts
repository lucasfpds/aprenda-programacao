import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  border: 1px solid gray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const Heading = styled.h1`
  padding: 42px;
  font-size: 48px;
  line-height: 52px;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 767px) {
    padding: 16px;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const IntroductionTitle = styled.h2`
  font-size: 54px;
  margin: 52px 0;
  max-width: 858px;

  @media screen and (max-width: 767px) {
    font-size: 36px;
    text-align: center;
    margin: 32px 0;
  }
`;

export const IntroductionSubTitle = styled.h4`
  font-size: 20px;
  margin: 86px 0 52px;
  width: 858px;
  font-weight: 300;
  max-width: 620px;
  letter-spacing: 4px;
  line-height: 170%;

  @media screen and (max-width: 767px) {
    font-size: 20px;
    max-width: 100%;
    margin: 0 0 16px;
    letter-spacing: 2px;
    text-align: center;
    line-height: 170%;
  }
`;

type ImageProps = { isBodyImage?: boolean };
export const Image = styled.img<ImageProps>`
  ${({ isBodyImage }: ImageProps): string => `width: ${isBodyImage ? "640px" : "initial"};`}

  @media screen and (max-width: 767px) {
    max-width: 90vw;
  }
`;

export const Body = styled.body`
  margin: 32px 0 32px;
  border-top: 2px solid;
  padding: 32px 0;
  max-width: 640px;
  border-bottom: dotted;

  @media screen and (max-width: 767px) {
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const SelfInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 52px;

  @media screen and (max-width: 767px) {
    align-self: self-start;
    margin-bottom: 0;
  }
`;

export const SelfImage = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 50%;
`;

export const SelfContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const SelfName = styled.h6`
  font-size: 16px;
  margin: 0;
`;

export const SelfDate = styled.p`
  font-size: 16px;
  margin: 8px 0 0;
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 20px;
`;

export const Title = styled.h5`
  text-align: justify;
  font-size: 32px;
  margin-bottom: 24 px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 16px;
  line-height: 160%;
  padding: 8px 0;
  width: 100%;
  max-width: 320px;
  cursor: pointer;
  border: 1px solid #eaeaea;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background: #eaeaea;
    transition: 0.2s;
    border: 1px solid #eaeaea;
  }

  @media screen and (max-width: 767px) {
    gap: 6px;
    font-size: 12px;
    line-height: 80%;
    padding: 8px 0;
  }

  & ${Image} {
    width: 70px;
    height: 70px;

    @media screen and (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Tags = styled.p`
  text-align: justify;
  font-size: 16px;
  letter-spacing: 3%;

  @media screen and (max-width: 767px) {
    align-self: self-start;
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 24px;
  max-width: 620px;
  align-items: center;

  & p {
    margin: 0;
  }
`;

export const Link = styled.p`
  width: 100%;
  text-align: right;
  font-weight: 700;
  margin: 0;
`;

export const Copy = styled.p`
  margin: 24px 0 0 0;
  width: 100%;
  text-align: center;
  font-weight: 700;
`;
