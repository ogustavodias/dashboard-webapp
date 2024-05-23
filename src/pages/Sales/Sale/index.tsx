// Styles
import * as S from "../styles";

// Hooks
import useFetch from "../../../hooks/useFetch";

// React Router DOM
import { useParams } from "react-router-dom";
import { ISale } from "../../../context/global";
import { toCurrency } from "../../../functions/currency";

// Components
import Error from "../../../components/Error/index";
import { Loading } from "../../../components/Loading/styles";

interface ISaleWithError extends ISale {
  error: string;
}

const Sale = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch<ISaleWithError>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!data) return;
  if (data.error) return <Error message={data.error} />;

  return (
    <S.List>
      <S.Item>ID: {data.id} </S.Item>
      <S.Item>Nome: {data.nome}</S.Item>
      <S.Item>Preço: {toCurrency(data.preco)}</S.Item>
      <S.Item>Status: {data.status} </S.Item>
      <S.Item>Pagamento: {data.pagamento}</S.Item>
    </S.List>
  );
};

export default Sale;
