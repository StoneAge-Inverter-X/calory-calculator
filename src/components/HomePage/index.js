import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { foodSliceActions } from "../../store/food-slice.js";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  const dispatch = useDispatch();

  const userInput = useSelector((state) => state.foodSlice.userInput);

  let navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(foodSliceActions.setUserInput(inputText));

    navigate(`/search/${inputText}`);
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
              userInput.length === 0
                ? inputText
                : inputText.length === 0
                ? dispatch(foodSliceActions.setUserInput(""))
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
