//Рендерит элемент бегущей строки, получает тикер, цену и изменение цены
const QuotesItem = (props) => {
  return (
    <li>
      <div>{props.ticker}</div>
      <div>{props.price}</div>
      <div>{props.change}</div>
    </li>
  );
};

export default QuotesItem;
