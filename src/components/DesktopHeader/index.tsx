import React from "react";
import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
  MyNetworkIcon,
  MessagesIcon,
  BagIcon,
} from "./styles";

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Inicio</span>
            </button>
            <button>
              <MyNetworkIcon />
              <span>Minha Rede</span>
            </button>
            <button>
              <BagIcon />
              <span>Vagas</span>
            </button>
            <button>
              <MessagesIcon />
              <span>Mensagens</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/flubyGit.png" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
