import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { foodSliceActions } from "../../store/food-slice.js";

import CaloryBreakdown from "../CaloryBreakdown/CaloryBreakdown";

const REACT_API_KEY = "8f9c86444382c61d90e0c605b07f6f98";

const CaloryResult = () => {
  const dispatch = useDispatch();

  const userInput = useSelector((state) => state.foodSlice.userInput);
  //const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const isLoading = useSelector((state) => state.foodSlice.isLoading);
  const cacheFoodNames = useSelector((state) => state.foodSlice.cacheFoodNames);
  const cacheFoodData = useSelector((state) => state.foodSlice.cacheFoodData);

  const totalCalory = useSelector((state) => state.foodSlice.totalCalory);

  let params = useParams();

  useEffect(() => {
    //set isLoadin to true
    dispatch(foodSliceActions.setIsloading(true));

    const inputText = params.queryText;

    //!!imp:use userInput to store each serch querytext, if it changes fetch, no change no fetch
    if (inputText === userInput) {
      dispatch(foodSliceActions.setIsloading(false));
      return;
    }

    // parse inputText
    const outputArray = [];
    for (const section of inputText.toLowerCase().split(";")) {
      const [mount, foodName] = section.split(",");
      outputArray.push([mount, foodName]);
    }
    console.log(outputArray);

    //fetch each food's detials from api
    const foodListArray = [];
    let count = 0;
    let totalCalory = 0;

    for (const singleFood of outputArray) {
      const singleFoodItemName = singleFood[1].toLowerCase();
      const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=f9cc3b0e&app_key=${REACT_API_KEY}&ingr=${singleFood[1]}&nutrition-type=cooking`;

      if (cacheFoodNames.includes(singleFoodItemName)) {
        // if singleFoodItemName in the cache
        console.log(singleFoodItemName);
        count = count + 1;
        console.log(cacheFoodData[singleFoodItemName]);
        foodListArray.push([singleFood[0], cacheFoodData[singleFoodItemName]]);
        totalCalory =
          totalCalory +
          singleFood[0] *
            cacheFoodData[singleFoodItemName].nutrients.ENERC_KCAL;
        // console.log(cacheFoodData[singleFoodItemName]);
        // if the last item in array is in the Cache:dispatch all the data to slice before the loop ends
        if (count === outputArray.length) {
          dispatch(foodSliceActions.setApiOutput(foodListArray));
          dispatch(foodSliceActions.setTotalCalory(totalCalory));
          dispatch(foodSliceActions.setIsloading(false));
          continue;
        }
        continue;
      } else {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            dispatch(
              foodSliceActions.setCacheFoodData([
                singleFoodItemName,
                data.parsed[0].food,
              ])
            );
            dispatch(foodSliceActions.setCacheFoodNames(singleFoodItemName));

            foodListArray.push([singleFood[0], data.parsed[0].food]);
            totalCalory =
              totalCalory +
              singleFood[0] * data.parsed[0].food.nutrients.ENERC_KCAL;
            count = count + 1;
            if (count === outputArray.length) {
              dispatch(foodSliceActions.setApiOutput(foodListArray));
              dispatch(foodSliceActions.setTotalCalory(totalCalory));
              dispatch(foodSliceActions.setIsloading(false));
            }
          })
          .catch((error) => console.error(error));
      }
    }
    //dispatch(calculateTotalCalory)
    return () => {
      dispatch(foodSliceActions.setUserInput(inputText));
    };
  }, [params.queryText, cacheFoodData, cacheFoodNames, dispatch, userInput]);

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
