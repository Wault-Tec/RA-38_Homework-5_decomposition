//Рендерит строку телепрограммы, получает время, название программы, название и ссылку источника
import Text from "../Lvl_1/Text";

const TvItem = (props) => {
  return (
    <li>
      <time>{props.time}</time>
      <p>{props.title}</p>
      <Text link={props.link} type={"Source"} size={"14"} weigth={"400"}>
        {props.sourceTitle}
      </Text>
    </li>
  );
};

export default TvItem;
