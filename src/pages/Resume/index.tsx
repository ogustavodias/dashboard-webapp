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

// Types and Interfaces
import { ISale } from "../../context/global";

interface IGraphData {
  name: string;
  pago: number;
  processando: number;
  falha: number;
}

interface keyAndValue {
  [key: string]: IGraphData;
}

const Resume = () => {
  const { data, loading, error } = useGlobalContext();

  function dataToGraph(): IGraphData[] {
    if (data) {
      const dataGraph = data.reduce((previous: keyAndValue, now: ISale) => {
        const date = now.data.split(" ")[0].substring(5);
        if (!previous[date])
          previous[date] = { name: date, pago: 0, processando: 0, falha: 0 };

        previous[date][now.status] += now.preco;
        return previous;
      }, {} as keyAndValue);

      return Object.values(dataGraph);
    }

    return [{ name: "00-00", pago: 0, processando: 0, falha: 0 }];
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!data) return;

  const sales = data.filter((item: ISale) => item.status !== "falha");
  const received = sales.filter((item: ISale) => item.status === "pago");
  const processing = sales.filter((item: ISale) => item.status === "processando");

  return (
    <div>
      <S.ResumeHeader>
        <S.ResumeCard>
          <h2>Vendas</h2>
          <span>
            {toCurrency(sales?.reduce((acc: number, item: ISale) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Recebido</h2>
          <span>
            {toCurrency(received?.reduce((acc: number, item: ISale) => item.preco + acc, 0))}
          </span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Processando</h2>
          <span>
            {toCurrency(processing?.reduce((acc: number, item: ISale) => item.preco + acc, 0))}
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
