//Рендерит список строк с новостями, получает массив объектов с новостями
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  return (
    <ul>
      {props.array.map((item) => (
        <NewsItem img={item.img} link={item.link} text={item.text} />
      ))}
    </ul>
  );
};

export default NewsList;
