// Styles
import * as S from "./styles";

// Recharts library
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Hooks
import useGlobalContext from "../../hooks/useGlobalContext";

// Functions
import { toCurrency } from "../../functions/currency";

// Components
import { Loading } from "../../components/Loading/styles";
import Error from "../../components/Error";

interface IGraphData {
  name: string;
  pago: number;
  processando: number;
  falha: number;
}

const Resume = () => {
  const { data, loading, error } = useGlobalContext();

  function getMonthAndDay(date: string) {
    return date.split(" ")[0].substring(5);
  }

  const vendas = data?.filter(({ status }) => status !== "falha");
  const recebido = vendas?.filter(({ status }) => status === "pago");
  const processando = vendas?.filter(({ status }) => status === "processando");

  /*   const data = [
    { name: "05-07", pago: 30000, processando: 10000, falha: 20000 },
    { name: "06-07", pago: 40000, processando: 5000, falha: 20000 },
    { name: "07-07", pago: 50000, processando: 10000, falha: 40000 },
    { name: "08-07", pago: 10000, processando: 20000, falha: 40000 },
  ];
 */
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!data) return;

  return (
    <div>
      <S.ResumeHeader>
        <S.ResumeCard>
          <h2>Vendas</h2>
          <span>
            {toCurrency(vendas?.reduce((acc, item) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Recebido</h2>
          <span>
            {toCurrency(recebido?.reduce((acc, item) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Processando</h2>
          <span>
            {toCurrency(
              processando?.reduce((acc, item) => item.preco + acc, 0)
            )}
          </span>
        </S.ResumeCard>
      </S.ResumeHeader>
      {/*       <S.ResumeGraph>
        <ResponsiveContainer width="99%" height={400}>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pago" stroke="#8884d8" />
            <Line type="monotone" dataKey="processando" stroke="#82ca9d" />
            <Line type="monotone" dataKey="falha" stroke="#cac582" />
          </LineChart>
        </ResponsiveContainer>
      </S.ResumeGraph> */}
    </div>
  );
};

export default Resume;
