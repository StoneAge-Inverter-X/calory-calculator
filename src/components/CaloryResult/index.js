import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { foodSliceActions } from "../../store/food-slice.js";

import CaloryBreakdown from "../CaloryBreakdown/CaloryBreakdown";

const REACT_API_KEY = "8f9c86444382c61d90e0c605b07f6f98";
const CaloryResult = () => {
  const dispatch = useDispatch();

  const userInput = useSelector((state) => state.foodSlice.userInput);
  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const isLoading = useSelector((state) => state.foodSlice.isLoading);

  const totalCalory = useSelector((state) => state.foodSlice.totalCalory);

  let params = useParams();

  useEffect(() => {
    const inputText = params.queryText;
    //!!!imp:use userInput to store each serch querytext, if it changes fetch, no change no fetch
    // parse inputText
    const outputArray = [];
    for (const section of inputText.split(";")) {
      const [mount, foodName] = section.split(",");
      outputArray.push([mount, foodName]);
    }
    console.log(outputArray);

    //fetch each food's detials from api
    const foodListArray = [];
    let count = 0;
    let totalCalory = 0;
    for (const singleFood of outputArray) {
      const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=f9cc3b0e&app_key=${REACT_API_KEY}&ingr=${singleFood[1]}&nutrition-type=cooking`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          foodListArray.push([singleFood[0], data.parsed[0].food]);
          totalCalory =
            totalCalory +
            singleFood[0] * data.parsed[0].food.nutrients.ENERC_KCAL;
          count = count + 1;
          if (count === outputArray.length) {
            dispatch(foodSliceActions.setApiOutput(foodListArray));
            dispatch(foodSliceActions.setTotalCalory(totalCalory));
            dispatch(foodSliceActions.setIsloading());
          }
        })
        .catch((error) => console.error(error));
    }
    //dispatch(calculateTotalCalory)
  }, [params.queryText]);

  return (
    <div>
      <h2>Total Calory is:{totalCalory} KCal</h2>

      {!isLoading && <CaloryBreakdown />}

      {isLoading && <p>loading data</p>}

      {/* <p>data from store:{apiOutput[0][1]}</p>  ==5th:{userInput[2][0]}
      ==6th {userInput[2][1]}  ==firt:{userInput[0][0]}==second :{userInput[0][1]}
      ==third:{userInput[1][0]}==forth {userInput[1][1]}*/}
    </div>
  );
};

export default CaloryResult;
