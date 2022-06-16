//Рендерит виджет погоды
import Text from "../Lvl_1/Text";

const WeatherWidget = () => {
  return (
    <div>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Погода
      </Text>
      <div>Погода</div>
    </div>
  );
};

export default WeatherWidget;
