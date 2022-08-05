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
  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const totalCalory = useSelector((state) => state.foodSlice.totalCalory);

  let navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
            }}
            value={inputText}
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
