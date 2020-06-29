import React, { useState } from "react";
import Pedal from "./Pedal";
import Overdrive from "../assets/img/overdrive.svg";
import Distorcao from "../assets/img/distorcao.svg";
import Chorus from "../assets/img/chorus.svg";
import Delay from "../assets/img/delay.svg";
import Reverb from "../assets/img/reverb.svg";
import Phaser from "../assets/img/phaser.svg";
import Flanger from "../assets/img/flanger.svg";
import Equalizador from "../assets/img/equalizador.svg";
import Video from "./Video";
import Alerta from "./Alerta";

export default (props) => {
  const [titulo, setTitulo] = useState("Overdrive");
  const [info, setInfo] = useState(
    "A história dos drives vem dos primórdios da guitarra, de quando os guitarristas precisavam obter uma saturação a mais dos seus amplificadores, sem precisar chegar em volumes estratosféricos. Os Overdrives são muito utilizados para simular o som dos amplificadores valvulados com volumes bem altos, resultando naquela saturação quente, gostosa, ideal para tocar blues ou rock clássico."
  );
  const [classe, setClasse] = useState(
    "alert alert-warning text-justify d-block w-100"
  );
  const [srcVideo, setSrcVideo] = useState(
    "https://www.youtube.com/embed/SgDVyNHdN9I"
  );

  function overdrive() {
    setTitulo("Overdrive");
    setInfo(
      "A história dos drives vem dos primórdios da guitarra, de quando os guitarristas precisavam obter uma saturação a mais dos seus amplificadores, sem precisar chegar em volumes estratosféricos. Os Overdrives são muito utilizados para simular o som dos amplificadores valvulados com volumes bem altos, resultando naquela saturação quente, gostosa, ideal para tocar blues ou rock clássico."
    );
    setSrcVideo("https://www.youtube.com/embed/SgDVyNHdN9I");
    setClasse("alert alert-warning text-justify d-block w-100");
  }

  function distorcao() {
    setTitulo("Distorcao");
    setInfo(
      "Da mesma categoria do overdrive, a distorção também atua na saturação do timbre do instrumento, a diferença é que a Distorção é usada para se atingir sons mais agressivos, mais rasgados e com mais sustain, como o Metal ou Hard Rock.."
    );
    setSrcVideo("https://www.youtube.com/embed/VZenfW-XdX0");
    setClasse("alert alert-danger text-justify d-block w-100");
  }

  function chorus() {
    setTitulo("Chorus");
    setInfo(
      "Um efeito que duplica e desafina levemente o seu sinal. Pode trazer um efeito muito interessante, trazendo mais cor e acentuando o que você está tocando. Apesar da grande maioria usar o chorus no som limpo, alguns guitarristas como Zakk Wylde usam na hora do solo, obtendo um efeito de duplicação do sinal."
    );
    setSrcVideo("https://www.youtube.com/embed/nMERxkrrUF0");
    setClasse("alert alert-primary text-justify d-block w-100");
  }

  function delay() {
    setTitulo("Delay");
    setInfo(
      'Delay nada mais é do que um efeito de eco. Porém, você pode conseguir muito mais dele se aprender a usá-lo com maestria. Os controles mais importantes são o "Tempo" que controla a distancia entre as repetições e o "Repetições" que controla a quantidade de repetições. Mas com delays, sempre damos essa dica: menos é mais. Você pode chegar de um som parecido com um reverb de rockabilly até os loops do The Edge..'
    );
    setSrcVideo("https://www.youtube.com/embed/vHFbY21HEvo");
    setClasse("alert alert-light text-justify d-block w-100");
  }

  function reverb() {
    setTitulo("Reverb");
    setInfo(
      "Reverb é um dos efeitos mais fundamentais para todo guitarrista, e já vem de fábrica na maioria dos amplificadores. Reverb adiciona mais profundidade ao seu som. Esse efeito é tão usado em gravações que já virou quase que obrigatório. Spring e Plate são os tipos mais comuns de reverb, mas cada vez mais vemos novos tipos surgindo por aí que valem a pena ser conferidos. "
    );
    setSrcVideo("https://www.youtube.com/embed/kWG6e3WGIBM");
    setClasse("alert alert-dark text-justify d-block w-100");
  }

  function phaser() {
    setTitulo("Phaser");
    setInfo(
      "O Phaser já foi usado de tantas maneiras que vale a pena ser estudado mais a fundo. Ele adiciona ao seu som uma nova versão do seu sinal, mas fora de fase, dando um efeito rodopiante do som que pode te dar muitas possibilidades sonoras. Para entender melhor o que acontece, confira os solos do Eddie Van Halen, ele usa o Phaser para dar mais movimento ao seu som na hora do solo."
    );
    setSrcVideo("https://www.youtube.com/embed/OJfFt2i2Yd4");
    setClasse("alert bg-danger text-justify d-block w-100");
  }

  function flanger() {
    setTitulo("Flanger");
    setInfo(
      "Flanger imita o som geralmente criado em estúdio, quando duas trilhas são mixadas juntas, mas umas está atrasada em relação a outra. Isso acaba por adicionar uma modulação ao seu som. O flanger pode adicionar desde uma pequena variação no seu som, até um efeito que mais parece um avião. "
    );
    setSrcVideo("https://www.youtube.com/embed/6c_xQhQgv4I");
    setClasse("alert bg-purple text-justify d-block w-100");
  }

  function equalizador() {
    setTitulo("Equalizador");
    setInfo(
      "O equalizador é um dispositivo que atua diretamente nas frequências, altura do som, dessa forma, podemos utilizá-lo para corrigir determinadas regiões do áudio ou ressaltá-las. Muitos acham desnecessário, mas um bom equalizador pode fazer milagres com amplificadores com poucas opções de equalização. Com um equalizador de 6 bandas por exemplo, você consegue chegar nos detalhes de quais faixas de frequência quer alterar."
    );
    setSrcVideo("https://www.youtube.com/embed/Cs41YqZnmn8");
    setClasse("alert bg-brown text-justify d-block w-100");
  }

  return (
    <div>
      <h1 className="text-center text-danger">Efeitos de Guitarra</h1>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Alerta className={classe} titulo={titulo} info={info} />
          </div>

          <div className="col">
            <Video src={srcVideo} />
          </div>
        </div>
      </div>

      <div className="container w-25">
        <div className="row">
          <div className="col-12">
            <div id = "controle" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Pedal src={Overdrive} onClick={overdrive} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Distorcao} onClick={distorcao} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Chorus} onClick={chorus} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Delay} onClick={delay} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Reverb} onClick={reverb} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Equalizador} onClick={equalizador} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Phaser} onClick={phaser} />
                </div>

                <div className="carousel-item">
                  <Pedal src={Flanger} onClick={flanger} />
                </div>
              </div>

              <a href="#controle" className = "carousel-control-prev" role = "button" data-slide = "prev">
                  <span className = "carousel-control-prev-icon" aria-hidden = "true"></span>
                  <span className = "sr-only">Voltar</span>
              </a>

              <a href="#controle" className = "carousel-control-next" role = "button" data-slide = "next">
                  <span className = "carousel-control-next-icon" aria-hidden = "true"></span>
                  <span className = "sr-only">Próximo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
