import Sidebar from "../../Home/Sidebar";
import * as S from "./styles";

export interface PageProps {
  readonly isGuest: boolean;
}
export default function ListFriend(props: PageProps) {
  return (
    <S.Wrapper>
      <Sidebar isGuest={props.isGuest} />
    </S.Wrapper>
  );
}
