import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodSliceActions } from "../../store/food-slice.js";

import * as React from "react";
import Button from "@mui/material/Button";

const PageNotFound = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div>
      <h1>
        {" "}
        WOops.. page doesn't exist.Click{" "}
        <Button
          color="error"
          onClick={() => {
            dispatch(foodSliceActions.setUserInput(""));

            navigate("/");
          }}
        >
          Home
        </Button>
        to go home{" "}
      </h1>
    </div>
  );
};

export default PageNotFound;
