import { useDispatch } from "react-redux";
import { remove } from "../../store/orderSlice";

import "./FoundItem.style.scss";
import Close from "../../assets/close-circle.png";
function FoundItem({ img, description, count, price, id }) {
  const dispatch = useDispatch();
  return (
    <div className="found-item-container">
      <img src={img} alt="" />
      <div class="details">
        <p>{description}</p>
        <p>
          {" "}
          <span>
            <span> {price} </span> X {count}
          </span>
          ريال
        </p>
      </div>
      <div class="total">
        <img
          src={Close}
          width="21px"
          height="21px"
          alt=""
          onClick={() => dispatch(remove(id))}
        />
        <span>
          {" "}
          <span>{parseFloat(price) * count} </span>ريال
        </span>
      </div>
    </div>
  );
}

export default FoundItem;
