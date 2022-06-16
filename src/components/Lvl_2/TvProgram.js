//Рендерит блок телепрограммы, получает массив объектов
import TvItem from "./TvItem";
import Text from "../Lvl_1/Text";

const TvProgram = (props) => {
  return (
    <div>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Телепрограмма
      </Text>
      <button />
      <ul>
        {props.array.map((item) => (
          <TvItem
            time={item.time}
            title={item.title}
            link={item.link}
            sourceTitle={item.sourceTitle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TvProgram;
