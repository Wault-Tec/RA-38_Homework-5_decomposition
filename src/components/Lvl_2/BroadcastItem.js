//рендерит строку списка эфиров, получает название эфира, название и ссылку источника
import Image from "../Lvl_1/Image";
import Text from "../Lvl_1/Text";

const BroadcastItem = (props) => {
  return (
    <li>
      <Image url={url} width={"50px"} height={"50px"} />
      <p>{props.title}</p>
      <Text link={props.link} type={"Source"} size={"12"} weigth={"400"}>
        {props.sourceTitle}
      </Text>
    </li>
  );
};

export default BroadcastItem;
