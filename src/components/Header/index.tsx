// Styles
import * as S from "./styles";

// Components
import CurrentCard from "./CurrentCard";
import Input from "./Input";
import MonthFilters from "./MonthFilters";

const Header = () => {
  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <Input label="Início" />
        <Input label="Final" />
      </S.Form>
      <CurrentCard />
      <MonthFilters />
    </S.Container>
  );
};

export default Header;
