//Рендерит шапку новостного блока
import Text from "../Lvl_1/Text";

const NewsHeader = () => {
  return (
    <nav>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Сейчас в сми
      </Text>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        в Германии
      </Text>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Рекомендуем
      </Text>
      <span>Дата</span>
    </nav>
  );
};

export default NewsHeader;
