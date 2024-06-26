// Styles
import * as S from "./styles";
import { Loading } from "../../components/Loading/styles";

// Hooks
import useGlobalContext from "../../Hooks/useGlobalContext";

// Functions
import { toCurrency } from "../../functions/currency";

// Components
import Error from "../../components/Error";

// Types and Interfaces
import { ISale } from "../../context/global";

const Sales = () => {
  const { data, loading, error } = useGlobalContext();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!data) return;

  return (
    <S.List>
      {data.map((item: ISale) => {
        return (
          <li key={item.id}>
            <S.Item href={`/vendas/${item.id}`}>
              <S.ItemId>{item.id}</S.ItemId>
              <S.ItemName>{item.nome}</S.ItemName>
              <S.ItemValue>{toCurrency(item.preco)}</S.ItemValue>
            </S.Item>
          </li>
        );
      })}
    </S.List>
  );
};

export default Sales;
