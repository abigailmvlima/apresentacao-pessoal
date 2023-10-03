import { ContextNavigation } from "@context/contextNavigation";
import { useContext } from "react";
import * as S from "./styles";

import { BtAddPacients, BtListPacients, LogoTop } from "@assets/svg";
import { ButtomHome } from "@components/buttomHome";
import { Menu } from "@components/menu";
import Title from "@components/title";
import { TNavigation } from "@domain/types/TNavigation";
import { ETitleSize } from "@domain/types/TStyles";

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  return (
    <S.Container>
      <S.Contents>
        <S.Logo>
          <LogoTop />
        </S.Logo>
        <S.Title>
          <Title label="Ola, Dr Marcio Alvarenga" size={ETitleSize.s4} />
          <Title
            label="São Paulo, 12 de Janeiro de 2023"
            size={ETitleSize.s2}
          />
        </S.Title>

        <S.SubTitle>
          <Title label="Atalhos" size={ETitleSize.s3} />
        </S.SubTitle>

        <S.Buttons>
          <ButtomHome
            title={"Lista Pacientes"}
            icon={BtListPacients}
            onPress={route.listPacient}
          />
          <ButtomHome
            title={"Cadastrar Paciente"}
            icon={BtAddPacients}
            onPress={route.cadPaient}
          />
        </S.Buttons>
      </S.Contents>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;