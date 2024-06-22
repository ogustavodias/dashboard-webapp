// Styles
import * as S from "./styles";

// Functions
import { formatDate, getMonthWord } from "../../../functions/date";

// Hooks
import useGlobalContext from "../../../Hooks/useGlobalContext";

const MonthFilters = () => {
  const { data, setStart, setEnd } = useGlobalContext();

  if (!data) return;

  const init = new Date();
  const now = new Date(init.getFullYear(), init.getMonth() + 1, 0);
  const lastOne = new Date(now.getFullYear(), now.getMonth(), 0);
  const lastSec = new Date(lastOne.getFullYear(), lastOne.getMonth(), 0);
  const lastThi = new Date(lastSec.getFullYear(), lastSec.getMonth(), 0);

  function handleButton(date: Date) {
    const end = formatDate(date);
    const start = formatDate(new Date(date.getFullYear(), date.getMonth(), 1));
    setEnd(end);
    setStart(start);
  }

  return (
    <S.Container>
      <S.Button onClick={() => handleButton(lastThi)}>
        {getMonthWord(lastThi)}
      </S.Button>
      <S.Button onClick={() => handleButton(lastSec)}>
        {getMonthWord(lastSec)}
      </S.Button>
      <S.Button onClick={() => handleButton(lastOne)}>
        {getMonthWord(lastOne)}
      </S.Button>
      <S.Button onClick={() => handleButton(now)}>{getMonthWord(now)}</S.Button>
    </S.Container>
  );
};

export default MonthFilters;
