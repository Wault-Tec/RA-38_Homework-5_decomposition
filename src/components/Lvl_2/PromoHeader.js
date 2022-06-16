//Рендерит рекламный блок над поисковой строкой

import Image from "../Lvl_1/Image";
import Text from "../Lvl_1/Text";

const PromoHeader = (props) => {
  return (
    <div>
      <Image url={props.url} width={"200px"} height={"200px"} />
      <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
        Текст
      </Text>
      <Text link={"#"} type={"Content"} size={"12"} weigth={"400"}>
        Текст
      </Text>
    </div>
  );
};

export default PromoHeader;
