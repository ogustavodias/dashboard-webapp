// Styles
import * as S from "./styles";

// Components
import CurrentCard from "./CurrentCard";
import Input from "./Input";
import MonthFilters from "./MonthFilters";

// Hooks
import useGlobalContext from "../../Hooks/useGlobalContext";

const Header = () => {
  const { start, end, setStart, setEnd } = useGlobalContext();

  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Início"
          value={start}
          onChange={({ target }) => setStart(target.value)}
        />
        <Input
          label="Final"
          value={end}
          onChange={({ target }) => setEnd(target.value)}
        />
      </S.Form>
      <CurrentCard />
      <MonthFilters />
    </S.Container>
  );
};

export default Header;
