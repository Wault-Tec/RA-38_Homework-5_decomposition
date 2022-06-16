//Рендерит бегущую строку с котировками, получает массив объектов
import QuotesItem from "../Lvl_1/QuotesItem";

const QuotesList = (props) => {
  return (
    <ul>
      {props.array.map((item) => (
        <QuotesItem ticker={item.ticker} price={item.price} />
      ))}
    </ul>
  );
};

export default QuotesList;
