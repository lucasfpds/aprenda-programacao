import React from "react";
import image from "./images/image.svg";
import body_image from "./images/body_image.svg";
import facebook_icon from "./images/facebook_icon.svg";
import twitter_icon from "./images/twitter_icon.svg";
import profile_image from "./images/profile_image.png";

import "./App.css";
import {
  Container,
  Header,
  Title,
  Introduction,
  IntroductionTitle,
  IntroductionSubTitle,
  Image,
  Body,
  SelfInfo,
  SelfImage,
  SelfContent,
  SelfName,
  SelfDate,
  Text,
  Heading,
  Buttons,
  Button,
  Tags,
  Footer,
  Link,
  Copy,
} from "./styles";

function App() {
  const shareOnFacebook = () => {
    const url = "aprendaprogramacao.tech";
    const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);

    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const url = "aprendaprogramacao.tech";
    const text = "Olha esse site que acabei de descobrir: ";
    const twitterShareUrl =
      "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text);

    window.open(twitterShareUrl, "_blank");
  };

  return (
    <Container className="App">
      <Header>
        <Heading>Aprenda Programação</Heading>
      </Header>
      <Introduction>
        <IntroductionTitle>A few words about this blog platform, Ghost, and how this site was made</IntroductionTitle>
        <IntroductionSubTitle>Why Ghost (& Figma) instead of Medium, WordPress or other options?</IntroductionSubTitle>
        <Image src={image} />
      </Introduction>
      <Body>
        <SelfInfo>
          <SelfImage src={profile_image} />
          <SelfContent>
            <SelfName>Mika MAtikainen</SelfName>
            <SelfDate>Apr 15, 2020 · 4 min read</SelfDate>
          </SelfContent>
        </SelfInfo>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac
          habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
          <br />
          <br />
          <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
          posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
          <br />
          <br />
          <br />
        </Text>
        <Title>Next on the pipeline</Title>
        <Text>
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula
          suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
          <br />
          <br />
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
        </Text>
        <Image src={body_image} />

        <Text>
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam quis posuere ligula.
          <br />
          <br />
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante.
          Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere
          maximus dui et fringilla. Nulla non volutpat leo.
          <br />
          <br />
          <br />
          <br />
          Thanks for reading,
          <br />
          Mika
        </Text>
        <Buttons>
          <Button onClick={shareOnFacebook}>
            <Image src={facebook_icon} />
            Share on Facebook
          </Button>
          <Button onClick={shareOnTwitter}>
            <Image src={twitter_icon} />
            Share on Twitter
          </Button>
        </Buttons>
        <br />
        <br />
        <Tags>
          Tags: <u>product design</u>, <u>culture</u>
        </Tags>
      </Body>
      <Footer>
        <div>
          <SelfImage src={profile_image} />
        </div>
        <Text>
          <b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA
          participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
        </Text>
      </Footer>
      <Copy>© 2024. All rights reserved.</Copy>
      <Link>
        Developed by:{" "}
        <a href="https://www.lucasfernandesdev.com.br/" target="_blank" rel="noreferrer">
          lucasfernandesdev.com.br
        </a>
      </Link>
    </Container>
  );
}

export default App;
