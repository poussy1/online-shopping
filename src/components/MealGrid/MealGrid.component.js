import MealItem from "../MealItem";
import "./MealGrid.style.scss";

function MealGrid({ items }) {
  return (
    <div className="meal-grid-container">
      {items.map((item, i) => (
        <MealItem
          imgUrl={item.imgUrl}
          category={item.category}
          price={item.price}
          calories={item.calories}
          title={item.title}
          quantity={item.quantity}
          id={i}
        />
      ))}
    </div>
  );
}

export default MealGrid;
