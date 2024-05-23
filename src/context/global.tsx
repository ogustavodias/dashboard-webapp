import React, { PropsWithChildren, createContext } from "react";
import useFetch from "../hooks/useFetch";
import { getDate } from "../functions/date";

interface ISale {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "cartao" | "boleto" | "pix";
  parcelas: number | null;
  data: string;
}

interface IContext {
  data: ISale | null;
  loading: boolean;
  error: string | null;
  start: string;
  end: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<IContext | null>(null);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = React.useState(getDate(1));
  const [end, setEnd] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<ISale>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`
  );

  return (
    <GlobalContext.Provider
      value={{ data, loading, error, start, end, setStart, setEnd }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
