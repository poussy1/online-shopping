import { useState } from "react";
import { useSelector } from "react-redux";
import "./SideSearch.style.scss";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch.component";
import CustomerSearchResult from "../../components/CustomerSearchResult/CustomerSearchResult.component";
import items from "../../data/Items";
import { useEffect } from "react";
import { isEmpty } from "lodash";
function SideSearch() {
  const orderedItems = useSelector((state) => state.order.ordered_items);
  const [foundItems, setFoundItems] = useState([]);
  const [child, setChild] = useState({});
  useEffect(() => {
    setFoundItems(() => {
      if (isEmpty(child)) return [];
      return orderedItems.map((orderedItem) => {
        return {
          ...items[orderedItem.item_id],
          id: orderedItem.item_id,
          count: orderedItem.count,
        };
      });
    });
  }, [orderedItems, child]);
  return (
    <div className="side-search-container">
      <CustomerSearch updateChild={setChild} />
      <CustomerSearchResult foundItems={foundItems} child={child} />
    </div>
  );
}

export default SideSearch;
