//Рендерит список эфиров, получает массив объектов

import BroadcastItem from "./BroadcastItem";
import Text from "../Lvl_1/Text";

const Broadcast = (props) => {
  return (
    <div>
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Эфир
      </Text>
      <ul>
        {Array.map((item) => (
          <BroadcastItem
            title={item.title}
            link={item.link}
            sourceTitle={item.sourceTitle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Broadcast;
