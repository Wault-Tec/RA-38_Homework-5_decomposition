//Рендерит строку с новостью, получает иконку, текст и ссылку
import Text from "../Lvl_1/Text";
import Image from "../Lvl_1/Image";

const NewsItem = (props) => {
  return (
    <li>
      <Image url={props.img} width={"50px"} height={"50px"} />
      <Text link={props.link} type={"Content"} size={"14"} weigth={"700"}>
        {props.text}
      </Text>
    </li>
  );
};

export default NewsItem;
