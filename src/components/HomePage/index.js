import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";

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
import Autocomplete from "@mui/material/Autocomplete";

// import "./index.css";
//import { each } from "immer/dist/internal";

const usernameMock = "ab";
const pswMock = "12";

const HomePage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userInput = useSelector((state) => state.foodSlice.userInput);
  const isAuthed = useSelector((state) => state.foodSlice.isAuthed);
  const currentUser = useSelector((state) => state.foodSlice.currentUser);

  const [inputText, setInputText] = useState(" ");
  const [userName, setUserName] = useState("");
  const [userPsw, setUserPsw] = useState("");

  // const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  const [formValues, setFormValues] = useState([{ serving: "", foodName: "" }]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userName, userPsw);

    if (isAuthed) {
      setUserName("");
      setUserPsw("");
      dispatch(foodSliceActions.setIsAuthed(false));
      dispatch(foodSliceActions.setUserInput(""));
      dispatch(foodSliceActions.setCurrentUser(""));
      setFormValues([{ serving: "", foodName: "" }]);

      navigate("/");

      return;
    } else if (userName === usernameMock && userPsw === pswMock) {
      setUserName("");
      setUserPsw("");
      dispatch(foodSliceActions.setIsAuthed(true));
      dispatch(foodSliceActions.setCurrentUser(userName));
    } else {
      alert("wrong password or username ");
      dispatch(foodSliceActions.setIsAuthed(false));
    }
  };

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

  // addable form handlers

  const handleOptionTextClick = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i].foodName = e.target.outerText;
    setFormValues(newFormValues);
  };

  let handleChange = (i, e) => {
    // console.log(e.target.input.value);

    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { serving: "", foodName: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formValues));

    //[{"serving":"111","foodName":"abc"},{"serving":"","foodName":""}]
    //navigate(`/search/${param.trim()}`);

    let param = "";
    for (const each of formValues) {
      if (each.serving.trim() !== "") {
        param = param + each.serving + "," + each.foodName + ";";
      }
    }
    console.log(param);
    navigate(`/search/${param}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ alignItems: "center" }}>
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
            {isAuthed && (
              <Button
                color="secondary"
                onClick={() => navigate(`/history/${currentUser}`)}
              >
                Histroy
              </Button>
            )}

            <form onSubmit={handleLogin}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-evenly"
              >
                {isAuthed || (
                  <TextField
                    id="username-field"
                    label="please enter: ab"
                    defaultValue="please enter: ab"
                    size="small"
                    color="warning"
                    onChange={(e) => {
                      setUserName(e.target.value);
                      //dispatch(foodSliceActions.setUserInput(e.target.value));
                    }}
                    value={userName}
                  />
                )}
                {isAuthed || (
                  <TextField
                    id="standard-password-input"
                    label="please enter: 12"
                    type="password"
                    size="small"
                    color="warning"
                    autoComplete="current-password"
                    onChange={(e) => {
                      setUserPsw(e.target.value);
                      //dispatch(foodSliceActions.setUserInput(e.target.value));
                    }}
                  />
                )}
                <Button type="submit" variant="contained" color="success">
                  {isAuthed ? "Logout" : "Login"}
                </Button>
              </Stack>
            </form>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Card>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <TextField
              disabled={!isAuthed}
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

            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={!isAuthed}
            >
              Calculate it
            </Button>
            <Button
              type="reset"
              variant="contained"
              onClick={handleResetButton}
              color="success"
              disabled={!isAuthed}
            >
              Reset entry
            </Button>
          </Stack>
        </form>
      </Card> */}
      <Card>
        <form onSubmit={handleFormSubmit}>
          {formValues.map((element, index) => (
            // <div className="form-inline" key={index}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
              key={index}
            >
              <Box className={styles.inputRow}>
                {/* <label>Number of Servings:</label> */}
                {/* <input
                  disabled={!isAuthed}
                  type="number"
                  name="serving"
                  value={(isAuthed && element.serving) || ""}
                  onChange={(e) => handleChange(index, e)}
                /> */}
                <TextField
                  disabled={!isAuthed}
                  type="text"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  name="serving"
                  label="servings"
                  variant="standard"
                  size="small"
                  required="true"
                  color="success"
                  helperText="Please enter a number"
                  value={(isAuthed && element.serving) || ""}
                  onChange={(e) => handleChange(index, e)}
                  sx={{ mr: "30px", width: 1 / 2 }}
                />

                {/* <label>Food Name:</label> */}
                {/* <TextField
                  disabled={!isAuthed}
                  type="text"
                  name="foodName"
                  label="food name"
                  variant="standard"
                  size="small"
                  required="true"
                  color="success"
                  helperText="Please enter a food name"
                  value={(isAuthed && element.foodName) || ""}
                  onChange={(e) => handleChange(index, e)}
                /> */}

                <Autocomplete
                  disabled={!isAuthed}
                  onChange={(e) => handleOptionTextClick(index, e)}
                  freeSolo
                  id="option-text"
                  sx={{ mr: "30px", width: 1 / 2 }}
                  options={top100Food.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="foodName"
                      disabled={!isAuthed}
                      label="food name"
                      size="small"
                      required="true"
                      color="success"
                      variant="standard"
                      helperText="Please enter a food name"
                      value={(isAuthed && element.foodName) || ""}
                      onChange={(e) => handleChange(index, e)}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Box>
              {index ? (
                <Button
                  disabled={!isAuthed}
                  type="button"
                  className="button remove"
                  color="error"
                  size="small"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </Button>
              ) : null}
              {/* </div> */}
            </Stack>
          ))}
          <div className="button-section">
            <Button
              disabled={!isAuthed}
              className="button add"
              type="button"
              size="small"
              sx={{ ml: "3px" }}
              onClick={() => addFormFields()}
            >
              Add
            </Button>
            <Button
              disabled={!isAuthed}
              className="button submit"
              size="small"
              type="submit"
            >
              Calculate
            </Button>
          </div>
        </form>
      </Card>
      <Card>
        <Outlet />
      </Card>
    </Container>
  );
};

const top100Food = [
  { title: "chicken", year: 1994 },
  { title: "cheese", year: 1972 },
  { title: "rice", year: 1972 },
  { title: "tea", year: 1972 },
  { title: "coffee", year: 1972 },
  { title: "milk", year: 1972 },
  { title: "egg", year: 1972 },
  { title: "tomato", year: 1972 },
  { title: "apple", year: 1972 },
  { title: "yogurt", year: 1972 },
  { title: "bread", year: 1972 },
  { title: "beef", year: 1972 },
  { title: "pork", year: 1972 },
  { title: "garlic", year: 1972 },
  { title: "lettuce", year: 1972 },
  { title: "onion", year: 1972 },
  { title: "cucumber", year: 1972 },
  { title: "salmon", year: 1972 },
  { title: "zucchini", year: 1972 },
  { title: "spinach", year: 1972 },
  { title: "pumpkin", year: 1972 },
  { title: "potato", year: 1972 },
  { title: "sweet potato", year: 1972 },
  { title: "avocado", year: 1972 },
  { title: "carrot", year: 1972 },
  { title: "shallot", year: 1972 },
  { title: "red capsicum", year: 1972 },
  { title: "green capsicum", year: 1972 },
  { title: "radish", year: 1972 },
  { title: "snow bean", year: 1972 },
  { title: "broccolini", year: 1972 },
  { title: "cauliflower", year: 1972 },
  { title: "round bean", year: 1972 },
  { title: "button mushroom", year: 1972 },
  { title: "leek", year: 1972 },
  { title: "celery", year: 1972 },
  { title: "pak choy", year: 1972 },
  { title: "sweet corn", year: 1972 },
  { title: "eggplant", year: 1972 },
  { title: "aspatagus", year: 1972 },
  { title: "parsnip", year: 1972 },
  { title: "rhubarb", year: 1972 },
];
export default HomePage;
