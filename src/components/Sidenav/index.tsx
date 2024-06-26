// Styles
import * as S from "./styles";

// Icons SRC
import resume from "../../assets/icons/resumo.svg";
import sales from "../../assets/icons/vendas.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import configs from "../../assets/icons/configuracoes.svg";
import contact from "../../assets/icons/contato.svg";
import exit from "../../assets/icons/sair.svg";

// Logo SRC
import logo from "../../assets/fintech.svg";

const Sidenav = () => {
  return (
    <S.Container>
      <img
        src={logo}
        alt="Fintech logo"
        style={{ marginBottom: "var(--gap)" }}
      />
      <nav>
        <S.List>
          <li>
            <S.Link href="/">
              <S.Icon src={resume} />
              Resumo
            </S.Link>
          </li>
          <li>
            <S.Link href="/vendas">
              <S.Icon src={sales} />
              Vendas
            </S.Link>
          </li>
          <li>
            <S.Link href="" className="disabled">
              <S.Icon src={webhooks} />
              Webhooks
            </S.Link>
          </li>
          <li>
            <S.Link href="" className="disabled">
              <S.Icon src={configs} />
              Configurações
            </S.Link>
          </li>
          <li>
            <S.Link href="" className="disabled">
              <S.Icon src={contact} />
              Contato
            </S.Link>
          </li>
          <li>
            <S.Link href="" className="disabled">
              <S.Icon src={exit} />
              Sair
            </S.Link>
          </li>
        </S.List>
      </nav>
    </S.Container>
  );
};

export default Sidenav;
