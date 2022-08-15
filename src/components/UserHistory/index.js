import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodSliceActions } from "../../store/food-slice.js";
import { historySliceActions } from "../../store/history-slice.js";

import * as React from "react";
import Button from "@mui/material/Button";

const UserHistory = () => {
  const history = useSelector((state) => state.historySlice.history);
  const currentUser = useSelector((state) => state.foodSlice.currentUser);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div>
      <h3>{currentUser} History </h3>
      <ul>
        {history.map((item, index) => (
          <li key={item.historyID}>
            {item.apiResult[0][0]} serving {item.apiResult[0][1].label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHistory;
