import { SItem, SList, SText, STitle } from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/images/close.svg";
import { ReactComponent as CheckedSvg } from "../../assets/images/check.svg";

interface CheckListProps {
  title: string;
  list: { title: string; regExp: RegExp; checked: boolean }[];
}

const CheckList: React.FC<CheckListProps> = ({ list, title }) => {
  return (
    <SList>
      <STitle>{title}</STitle>
      {list.map((item) => (
        <SItem>
          {item.checked ? (
            <CheckedSvg
              style={{ fill: "green", height: "15px", width: "15px" }}
            />
          ) : (
            <CloseSvg style={{ fill: "red", height: "15px", width: "15px" }} />
          )}
          <SText>{item.title}</SText>
        </SItem>
      ))}
    </SList>
  );
};

export default CheckList;
