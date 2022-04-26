import { useDispatch } from "react-redux";
import { add } from "../../store/orderSlice";
import "./MealItem.style.scss";
import plus from "../../assets/plus.png";
import info from "../../assets/info.png";
import runner from "../../assets/runner.png";
function MealItem({ price, imgUrl, title, quantity, calories, id }) {
  const dispatch = useDispatch();
  return (
    <div className="meal-item-container">
      <div class="product-info">
        <div class="calories">
          <img alt="" src={runner} />
          <span>{calories} kCal</span>
        </div>
        <img alt="" src={info} />
      </div>
      <div class="product-img">
        <img alt="" src={imgUrl} />
      </div>
      <div class="details">
        <p>{title}</p>
        <p>
          <span>{quantity}</span>:الكميه بالمخزون
        </p>
      </div>
      <div class="add">
        <span>
          <span>{price}</span>
        </span>
        <span>ريال</span>
        <img
          alt=""
          src={plus}
          onClick={() => {
            dispatch(add(id));
          }}
        />
      </div>
    </div>
  );
}

export default MealItem;
