import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { foodSliceActions } from "../../store/food-slice.js";
import Card from "../../UIWrapper/Card";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const HomePage = () => {
  const dispatch = useDispatch();

  const userInput = useSelector((state) => state.foodSlice.userInput);

  let navigate = useNavigate();
  const [inputText, setInputText] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(foodSliceActions.setUserInput(inputText));
    let param = "";
    if (inputText === " ") {
      param = userInput;
    } else param = inputText;

    //navigate(`/search/${inputText.trim()}`);
    navigate(`/search/${param.trim()}`);
    //navigate(`/search/${e.target.value.trim()}`);
  };

  const handleResetButton = () => {
    console.log("reset button is clicked");
    setInputText("");
    dispatch(foodSliceActions.setUserInput(""));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Calory Calculator
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Card>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <TextField
              fullWidth
              id="search-field"
              label="Enter Food List (eg:1,apple;2,beef)"
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

            <Button type="submit" variant="contained" color="success">
              Calculate it
            </Button>
            <Button
              type="reset"
              variant="contained"
              onClick={handleResetButton}
              color="success"
            >
              Reset entry
            </Button>
          </Stack>
        </form>
      </Card>
      <Card>
        <Outlet />
      </Card>
    </Container>
  );
};

export default HomePage;
