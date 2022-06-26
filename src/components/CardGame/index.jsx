import React from "react";
import bannerImage from "../../assets/bannerGame.svg";
import { CardPrice, ContainerBanner } from "../../styled";
import ButtonsBuy from "../ButtonsBuy";
import TimeNow from "../TimeNow";

export default function CardGame() {
  return (
    <ContainerBanner>
      <div>
        <div>
          <img src={bannerImage} alt="Imagem de game em promoção" />
        </div>
        <CardPrice>
          <p>R$ 80</p>
          <p>
            R$ <span>200</span>
          </p>
        </CardPrice>
        <div>
          <ButtonsBuy />
        </div>
      </div>
      <div>
        <TimeNow/>
      </div>
    </ContainerBanner>
  );
}
