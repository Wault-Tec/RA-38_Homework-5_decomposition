//Рендерит поисковую секцию
import MainInput from "../Lvl_1/MainInput";
import Image from "../Lvl_1/Image";
import Text from "../Lvl_1/Text";

const SearchSection = () => {
  return (
    <section>
      <nav>
        <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
          Текст
        </Text>
        <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
          Текст
        </Text>
        <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
          Текст
        </Text>
        <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
          Текст
        </Text>
        <Text link={"#"} type={"Header"} size={"14"} weigth={"700"}>
          Текст
        </Text>
      </nav>
      <Image url={url} width={"400px"} height={"100px"} />
      <MainInput />
      <div>
        <span>Текст</span>
        <a href={"#"}>текст</a>
      </div>
    </section>
  );
};

export default SearchSection;
