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

import "./index.css";

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

  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userName, userPsw);

    if (isAuthed) {
      setUserName("");
      setUserPsw("");
      dispatch(foodSliceActions.setIsAuthed(false));
      dispatch(foodSliceActions.setUserInput(""));
      dispatch(foodSliceActions.setCurrentUser(""));

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

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, mb: 1 }}>
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
                    label="username:ab,psw:12"
                    defaultValue="userName:ab,psw:12"
                    size="small"
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
                    label="Password"
                    type="password"
                    size="small"
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
      <Card>
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
      </Card>
      <Card>
        <form onSubmit={handleFormSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={element.email || ""}
                onChange={(e) => handleChange(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => addFormFields()}
            >
              Add
            </button>
            <button className="button submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Card>
      <Card>
        <Outlet />
      </Card>
    </Container>
  );
};

export default HomePage;
