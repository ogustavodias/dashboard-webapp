import React, { PropsWithChildren, createContext } from "react";
import useFetch from "../hooks/useFetch";

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
  /* `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}` */
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  const { data, loading, error } = useFetch<ISale>(
    `https://data.origamid.dev/vendas/`
  );

  console.log(data);

  return (
    <GlobalContext.Provider
      value={{ data, loading, error, start, end, setStart, setEnd }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
