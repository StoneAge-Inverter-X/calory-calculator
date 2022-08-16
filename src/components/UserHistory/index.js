import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { historySliceActions } from "../../store/history-slice.js";

import * as React from "react";
import Button from "@mui/material/Button";

// const initialHistoryState = {
//   history: [
//     {
//       historyID: "ab date time",
//       userName: "ab",
//       title: "lunch",
//       dateTimeOfMeal: "datetime",
//       userInput: "",
//       apiResult: [], //same as apiOutput in food-slice.js
//       totalCalory: 0,
//       timeSaved: "",
//     },
//     {
//       historyID: "0",
//       userName: "ab",
//       title: "dinner",
//       dateTimeOfMeal: "",
//       userInput: "",
//       apiResult: [], //same as apiOutput in food-slice.js
//       totalCalory: 0,
//       timeSaved: "",
//     },
//   ],
// };

const UserHistory = () => {
  const history = useSelector((state) => state.historySlice.history);
  const currentUser = useSelector((state) => state.foodSlice.currentUser);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const currentUserHistory = history.filter(
    (item) => item.userName === currentUser
  );

  const handleHistoryDelete = (e, historyIndex) => {
    e.preventDefault();
    console.log(historyIndex);
    dispatch(historySliceActions.deletHistoryByIndex(historyIndex));
  };
  return (
    <div>
      <h1>{currentUser}'s Saved History </h1>
      {currentUserHistory.length === 0 && <p>No saved history</p>}
      <ul>
        {currentUserHistory.map((item, historyIndex) => (
          <li>
            <h2>
              {item.title} on the date of {item.dateTimeOfMeal}:{" "}
              {item.totalCalory} KCal
            </h2>

            <ul>
              {item.apiResult.map((foodItem, foodItemIndex) => (
                <li key={foodItem[1].foodId}>
                  {foodItem[0]} serving {foodItem[1].label}
                </li>
              ))}
            </ul>
            <button
              onClick={(e) => {
                handleHistoryDelete(e, historyIndex);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHistory;

// <ul>
// {history.map((item, index) => (
//   <li key={item.historyID}>
//     {item.apiResult[0][0]} serving {item.apiResult[0][1].label}
//   </li>
// ))}
// </ul>
