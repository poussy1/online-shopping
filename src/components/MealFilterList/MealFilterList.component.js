import MealFilterItem from "../MealFilterItem";
import "./MealFilterList.style.scss";

function MealFilterList({ filterItems }) {
  return (
    <div className="meal-filter-List-container">
      {filterItems.map((filterItem) => (
        <MealFilterItem
          imgUrl={filterItem.imgUrl}
          category={filterItem.category}
        />
      ))}
      <MealFilterItem category="الكل" />
    </div>
  );
}

export default MealFilterList;
