//Рендерит блок посещаемых страниц, получает массив объектов с текстом и ссылками
import Text from "../Lvl_1/Text";

const Visited = (props) => {
  return (
    <div>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Посещаемое
      </Text>
      <ul>
        {props.array.map((item) => (
          <li>
            <Text link={item.link} type={"Content"} size={"12"} weigth={"400"}>
              {item.text}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Visited;
