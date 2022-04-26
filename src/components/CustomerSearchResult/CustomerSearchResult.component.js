import { useState } from "react";
import "./CustomerSearchResult.style.scss";
import FoundItem from "../FoundItem";
import OrderCheckout from "../OrderCheckout";
import GreenClose from "../../assets/green-close.png";
import { useEffect } from "react";

function CustomerSearchResult({ foundItems, child }) {
  const [orderedItems, setOrderedItems] = useState(foundItems);
  useEffect(() => {
    setOrderedItems(foundItems);
  }, [foundItems]);

  function getTotal() {
    return (
      orderedItems
        .map((i) => parseFloat(i.price) * i.count)
        .reduce((res, curr) => res + curr, 0) + 2.5
    );
  }
  return (
    <div className="customer-search-result-container">
      {orderedItems && orderedItems.length > 0 ? (
        <div class="order">
          <div class="found-items">
            <div class="found-items-header">
              <img src={child.image} alt="" />
              <div>
                <span>{child.number} الرقم المقصفي </span>
                <span>{child.name} </span>
              </div>
              <img src={GreenClose} width="20px" height="20px" alt="" />
            </div>
            <div class="found-items-body">
              <p>منتجات {orderedItems.length} </p>
              <div class="items-scroll">
                {orderedItems.map((item) => (
                  <FoundItem
                    img={item.imgUrl}
                    description={item.title}
                    price={item.price}
                    count={item.count}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
          <OrderCheckout
            notes="يفضل تاريخ صلاحية حديث"
            rate={2.5}
            total={getTotal(orderedItems)}
          />
        </div>
      ) : (
        <div class="inbox">
          <span>يجب عليك اختيار طالب اولا</span>
        </div>
      )}
    </div>
  );
}

export default CustomerSearchResult;
