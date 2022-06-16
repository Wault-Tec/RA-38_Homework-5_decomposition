//Рендерит новостной блок

import NewsHeader from "../Lvl_2/NewsHeader";
import NewsList from "../Lvl_2/NewsList";
import QuotesList from "../Lvl_2/QuotesList";

const NewsSection = () => {
  return (
    <section>
      <NewsHeader />
      <NewsList array={array} />
      <QuotesList array={array} />
    </section>
  );
};

export default NewsSection;
