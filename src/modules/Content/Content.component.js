import MealFilterList from "../../components/MealFilterList";
import MealGrid from "../../components/MealGrid";
import "./Content.style.scss";
import items from "../../data/Items";
import filterItems from "../../data/FilterItems";
function Content() {
  return (
    <div className="content-container">
      <MealFilterList filterItems={filterItems} />
      <MealGrid items={items} />
    </div>
  );
}

export default Content;
