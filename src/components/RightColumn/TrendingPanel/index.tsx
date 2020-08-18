import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel: React.FC = () => {
  const arrayAssunts = [
    {
      name: "Aurora irá testar 11 mil funcionários...",
      index: 1,
      readers: Math.floor(Math.random() * 3000),
    },
    {
      name: "Há vagas: confira as empresas",
      index: 2,
      readers: Math.floor(Math.random() * 3000),
    },
    {
      name: "Interesse por videogames dispara na",
      index: 3,
      readers: Math.floor(Math.random() * 3000),
    },
    {
      name: "Pesquisa detalha habitos dos brasileiros...",
      index: 4,
      readers: Math.floor(Math.random() * 3000),
    },
    {
      name: "A importância do aprendizado contínuo na vida...",
      index: 5,
      readers: Math.floor(Math.random() * 3000),
    },
  ];

  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          {arrayAssunts.map(({ index, name, readers }) => (
            <li key={index}>
              <span className="bullet" />
              <span className="news">
                <span className="head">
                  <>
                    <span>{name}</span>
                    <br></br>
                  </>
                </span>
                <span className="subtext">há 1 d • {readers} leitores</span>
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
