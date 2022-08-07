import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";
//import { foodSliceActions } from "../../store/food-slice.js";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  //const dispatch = useDispatch();

  const userInput = useSelector((state) => state.foodSlice.userInput);

  let navigate = useNavigate();
  const [inputText, setInputText] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(foodSliceActions.setUserInput(inputText));

    navigate(`/search/${inputText.trim()}`);
  };

  return (
    <Container maxWidth="sm">
      <h1>Calory Calculator</h1>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="search-field"
            label="Search"
            variant="outlined"
            onChange={(e) => {
              setInputText(e.target.value);
              //dispatch(foodSliceActions.setUserInput(e.target.value));
            }}
            value={
              //bug: the ' 'search should be ignored in CaloryResult.js
              userInput.length === 0
                ? inputText
                : inputText === " "
                ? userInput
                : inputText
            }
          />

          <Button type="submit" variant="contained">
            Calculate it!
          </Button>
        </Stack>
      </form>
      <Outlet />
    </Container>
  );
};

export default HomePage;
