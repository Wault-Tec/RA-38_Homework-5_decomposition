//Рендерит секцию с контентом под поисковой строкой
import WeatherWidget from "../Lvl_2/WeatherWidget";
import Visited from "../Lvl_2/Visited";
import TvProgram from "../Lvl_2/TvProgram";
import Broadcasts from "../Lvl_2/Broadcasts";

const ContentSection = () => {
  return (
    <section>
      <WeatherWidget />
      <Visited array={array} />
      <TvProgram array={array} />
      <Broadcasts array={array} />
    </section>
  );
};

export default ContentSection;
