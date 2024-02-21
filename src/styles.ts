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
`;

export const IntroductionSubTitle = styled.h4`
  font-size: 20px;
  margin: 86px 0 52px;
  width: 858px;
  font-weight: 300;
  max-width: 620px;
  letter-spacing: 4px;
  line-height: 170%;
`;

export const Image = styled.img``;

export const Body = styled.body`
  margin: 32px 0 32px;
  border-top: 2px solid;
  padding: 32px 0;
  max-width: 640px;
  border-bottom: dotted;
`;

export const SelfInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 52px;
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
`;

export const Tags = styled.p`
  text-align: justify;
  font-size: 16px;
  letter-spacing: 3%;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 24px;
  max-width: 620px;
  align-items: center;

  & > img {
    width: 70px;
    height: 70px;
  }
`;

export const Link = styled.p`
  width: 100%;
  text-align: right;
  font-weight: 700;
`;
