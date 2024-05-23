import * as S from "./styles";

const Error = ({ message }: { message: string }) => {
  return <S.Container>{message}</S.Container>;
};

export default Error;
