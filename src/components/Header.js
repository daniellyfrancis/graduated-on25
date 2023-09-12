import React from 'react';
import './Header.css';
import reprogramaLogo from '../assets/img/reprograma.svg'

const Header = () => {
  return (
    <header>
      <h1>On25 Graduates</h1>
      <p>Aqui você pode encontrar o perfil de todas as alunas formadas na turma On25 do curso Imersão Javascript da Reprograma.</p>
      <div className="reprograma-logo">
        <a href="https://reprograma.com.br/curso-imersao-javascript/" target="_blank">
          <img src={reprogramaLogo}/>
        </a>
      </div>
    </header>
  );
};

export default Header;
