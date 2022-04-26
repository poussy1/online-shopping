import "./MealFilterItem.style.scss";
function MealFilterItem({ imgUrl, category, itemStyle }) {
  return (
    <div className="meal-filter-item-container">
      <span>{category}</span>
      <img src={imgUrl} />
    </div>
  );
}

export default MealFilterItem;
