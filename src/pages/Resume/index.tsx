// Styles
import * as S from "./styles";

// Recharts library
import {
  Legend,
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

  function dataToGraph(): IGraphData[] {
    const dataGraph = data?.reduce((previous, now) => {
      const date = now.data.split(" ")[0].substring(5);
      if (!previous[date])
        previous[date] = { name: date, pago: 0, processando: 0, falha: 0 };

      previous[date][now.status] += now.preco;
      return previous;
    }, {} as { [key: string]: IGraphData });

    if (dataGraph) return Object.values(dataGraph);
    else return [{ name: "00-00", pago: 0, processando: 0, falha: 0 }];
  }

  console.log(dataToGraph());

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!data) return;

  const sales = data.filter(({ status }) => status !== "falha");
  const received = sales.filter(({ status }) => status === "pago");
  const processing = sales.filter(({ status }) => status === "processando");

  return (
    <div>
      <S.ResumeHeader>
        <S.ResumeCard>
          <h2>Vendas</h2>
          <span>
            {toCurrency(sales?.reduce((acc, item) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Recebido</h2>
          <span>
            {toCurrency(received?.reduce((acc, item) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Processando</h2>
          <span>
            {toCurrency(processing?.reduce((acc, item) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
      </S.ResumeHeader>
      <S.ResumeGraph>
        <ResponsiveContainer width="99%" height={400}>
          <LineChart data={dataToGraph()}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pago"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="processando"
              stroke="#82ca9d"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="falha"
              stroke="#cac582"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </S.ResumeGraph>
    </div>
  );
};

export default Resume;
