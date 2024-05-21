import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import * as S from "./styles";

const Resume = () => {
  const data = [
    { name: "05-07", pago: 30000, processando: 10000, falha: 20000 },
    { name: "06-07", pago: 40000, processando: 5000, falha: 20000 },
    { name: "07-07", pago: 50000, processando: 10000, falha: 40000 },
    { name: "08-07", pago: 10000, processando: 20000, falha: 40000 },
  ];

  return (
    <div>
      <S.ResumeHeader>
        <S.ResumeCard>
          <h2>Vendas</h2>
          <span>R$ 40.656,00</span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Recebido</h2>
          <span>R$ 40.656,00</span>
        </S.ResumeCard>
        <S.ResumeCard>
          <h2>Processando</h2>
          <span>R$ 40.656,00</span>
        </S.ResumeCard>
      </S.ResumeHeader>
      <S.ResumeGraph>
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
      </S.ResumeGraph>
    </div>
  );
};

export default Resume;
