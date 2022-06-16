//рендерит блок с рекламным баннером, получает ссылку и путь к изображению
import Image from "../Lvl_1/Image";

const Banner = (props) => {
  return (
    <a href={props.link}>
      <Image url={props.url} width={"1200px"} height={"400px"} />
    </a>
  );
};

export default Banner;
