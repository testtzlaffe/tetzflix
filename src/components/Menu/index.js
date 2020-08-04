import React from "react";
import Logo from "../../assets/img/Logo.png";
import LogoNetfenix from "../../assets/img/LogoOuro.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <div className="containerDir">
        <a href="https://netfenix.vercel.app" className="linkNetfenix">
          <img
            className="LogoNetfenix"
            alt="Logo Netfenix"
            src={LogoNetfenix}
          ></img>
        </a>
        <Button as={Link} to="/cadastro/video">
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}
