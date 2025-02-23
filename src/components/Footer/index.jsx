import { IoLogoInstagram } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

import logoSvg from "../../assets/logo-sulla.png";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>

      <div>
        <span>
          <p> Sulla Jeans </p>
          <IoLogoInstagram />
          <AiFillYoutube />
          <BiLogoFacebook />
          <BsTwitter />
        </span>

        <img src={ logoSvg } alt="logomarca" />

        <span>
          <p> Contato</p>
          <p> (00) 99999-9999 </p>
          <p> (00) 99999-9999 </p>
        </span>

      </div>

      <p>
        Copyright Sulla Jeans © - jaymerego2023@gmail.com,  2050 - Centro - São paulo/SP CEP: 68590-000 CNPJ: 87.948.167/0001-26 - Todos os direitos reservados
      </p>

    </Container>
  )
}