import React from "react";
import image from "./images/image.png";
import body_image from "./images/body_image.png";
import body_image_2 from "./images/body_image_2.png";
import facebook_icon from "./images/facebook_icon.svg";
import twitter_icon from "./images/twitter_icon.svg";
import profile_image from "./images/profile_image.png";

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
        <IntroductionTitle>Programar é o futuro! Comece hoje com cursos gratuitos</IntroductionTitle>
        <IntroductionSubTitle>Programe sem gastar nada: Descubra cursos gratuitos de qualidade.</IntroductionSubTitle>
        <Image src={image} />
      </Introduction>
      <Body>
        <SelfInfo>
          <SelfImage src={profile_image} />
          <SelfContent>
            <SelfName>Lucas Fernandes</SelfName>
            <SelfDate>Fev 25, 2024 · 15 min read</SelfDate>
          </SelfContent>
        </SelfInfo>
        <Text>
          <Text>
            Olá pessoal, seja bem-vindo a este espaço dedicado a inspirar jovens a explorar o vasto e fascinante mundo
            da programação! Se você já se perguntou sobre o que é programação, não se preocupe, estamos aqui para
            guiá-lo nessa jornada emocionante.
            <br />
            <br />
            Em sua essência, a programação é a arte de escrever instruções para um computador seguir. É como fornecer um
            conjunto de regras para máquinas, permitindo que elas executem tarefas complexas que facilitam nossa vida
            diária.
            <br />
            Por exemplo, pense nos aplicativos em nossos smartphones que nos mantêm conectados com amigos e familiares,
            ou nos sistemas de navegação em carros que nos guiam pelo trânsito caótico das cidades. Tudo isso é
            resultado do trabalho árduo e criativo dos programadores.
            <br />
            <br />
          </Text>
          <Title>Mas como exatamente a programação nos ajuda no dia a dia?</Title>
          Imagine esta cena: você está navegando na internet, pesquisando sobre um assunto que te interessa, quando de
          repente se depara com um site que simplifica exatamente o que você precisa saber. Ou então, você precisa
          realizar uma tarefa repetitiva no trabalho, e um software desenvolvido por programadores automatiza todo o
          processo, poupando seu tempo e energia.
          <br />A programação está por trás de tudo isso, simplificando tarefas, automatizando processos e nos
          conectando com o mundo de maneiras inimagináveis.
        </Text>
        <Image src={body_image} isBodyImage={true} />

        <Text>
          <br />
          <br />
          E falando em conexões, como está o mercado para quem decide se aventurar na área da programação? Posso
          garantir que está mais aquecido do que nunca! Com o avanço da tecnologia, a demanda por profissionais de
          programação só cresce.
          <br />
          Empresas de todos os setores, desde startups inovadoras até gigantes da tecnologia, estão ávidas por talentos
          que possam desenvolver soluções criativas e eficientes. E mais do que nunca, em um mundo cada vez mais
          digital, a habilidade de programação se torna essencial em praticamente todas as áreas profissionais.
          <br />
          <br />
          Mas antes de mergulhar de cabeça nesse mercado promissor, é fundamental destacar a importância da educação em
          nossas vidas. Aprender a programar não é apenas adquirir habilidades técnicas, mas também desenvolver o
          pensamento crítico, a resolução de problemas e a criatividade. Imagine a responsabilidade que recai sobre os
          ombros de programadores durante eventos cruciais, como eleições.
          <br />
          As urnas eletrônicas, responsáveis pelo funcionamento democrático de um país, são mantidas e aprimoradas por
          programadores como nós. É uma responsabilidade enorme, mas também uma oportunidade única de contribuir para a
          sociedade e fazer a diferença.
          <br />
          <br />
          <Image src={body_image_2} isBodyImage={true} />
          <br />
          <br />
          Então, se você está animado para começar sua jornada na programação, aqui vai uma lista com alguns sites que
          oferecem cursos gratuitos para você dar os primeiros passos: Obrigado por ter lido até aqui,
          <br />
          Lucas
        </Text>
        <Buttons>
          <Button onClick={shareOnFacebook}>
            <Image src={facebook_icon} />
            Compartilhe no Facebook
          </Button>
          <Button onClick={shareOnTwitter}>
            <Image src={twitter_icon} />
            Compartilhe no Twitter
          </Button>
        </Buttons>
        <br />
        <br />
        <Tags>
          Tags: <u>programação</u>, <u>tecnologia</u>, <u>educação</u>
        </Tags>
      </Body>
      <Footer>
        <div>
          <SelfImage src={profile_image} />
        </div>
        <Text>
          <b>Lucas Fernandes</b> é um desenvolvedor de software e graduando em engenharia da computação pelo Centro
          Universitário União das Américas Descomplica.
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
