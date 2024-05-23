// Styles
import * as S from "./styles";

const CurrentCard = () => {
  const { pathname } = window.location;
  const current = pathname === "/vendas" ? "Vendas" : "Resumo";

  return (
    <S.Container>
      <p>{current}</p>
    </S.Container>
  );
};

export default CurrentCard;
