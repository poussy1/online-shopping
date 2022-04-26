import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { set } from "../../store/orderSlice";

import "./CustomerSearch.style.scss";
import user from "../../assets/user.png";
import question from "../../assets/question.png";
import lens from "../../assets/lens.png";
import ChildOneItems from "../../data/ChildOneItems";

import { debounce } from "lodash";
function CustomerSeach({ updateChild }) {
  const [childName, setChildName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    var { child, items_ids } = ChildOneItems;
    childName
      ? debounce(() => {
          dispatch(set(items_ids));
          updateChild(child);
        }, 1000)()
      : dispatch(set([]));
  }, [childName, dispatch, updateChild]);

  return (
    <div className="customer-search-container">
      <div class="not-registered-person">
        <img src={user} alt="" />
        <img src={question} class="question" alt="" />
      </div>
      <div class="search-user">
        <img src={user} class="person" alt="" />
        <img src={lens} alt="" />
      </div>
      <div>
        <input
          value={childName}
          placeholder="اسم الطالب"
          class="icon"
          onChange={(evt) => setChildName(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default CustomerSeach;
