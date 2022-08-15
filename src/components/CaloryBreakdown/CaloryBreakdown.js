import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { historySliceActions } from "../../store/history-slice.js";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CaloryBreakdown = () => {
  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const history = useSelector((state) => state.historySlice.history);
  const currentUser = useSelector((state) => state.foodSlice.currentUser);
  const userInput = useSelector((state) => state.foodSlice.userInput);
  const totalCalory = useSelector((state) => state.foodSlice.totalCalory);

  const dispatch = useDispatch();

  //form state:
  const [titleInput, setTitleInput] = React.useState("");
  const [dateTimeInput, setDateTimeInput] = React.useState("");

  //Modal dialogue related
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const dateTime = new Date().toLocaleString();
    const historyID = currentUser + ">" + dateTime;
    //console.log(dateTimeInput, titleInput);
    // save the history to historySlice
    const newHistoryItem = {
      historyID: historyID,
      userName: currentUser,
      title: titleInput,
      totalCalory: totalCalory,
      apiResult: apiOutput, //same as apiOutput in food-slice.js
      dateTimeOfMeal: dateTimeInput,
      userInput: userInput,
      timeSaved: dateTime,
    };
    dispatch(historySliceActions.addToHistory(newHistoryItem));

    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  //navigation
  let navigate = useNavigate();

  return (
    <div>
      <h3>Breakdown </h3>
      <ul>
        {apiOutput.map((item, index) => (
          <li key={item[1].foodId}>
            {item[0]} serving {item[1].label}
            <button onClick={() => navigate(`/food/${index}`)}>
              More Nutrition detail
            </button>
          </li>
        ))}
      </ul>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save this to your History
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save to Your Histroy</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To save the calory and food items, please fill the form and click
            Save button.
          </DialogContentText>
          <TextField
            autoFocus
            required
            id="title"
            label="Title"
            variant="standard"
            value={titleInput}
            onChange={(e) => {
              setTitleInput(e.target.value);
              //dispatch(foodSliceActions.setUserInput(e.target.value));
            }}
          />
          <TextField
            required
            id="datetime"
            label="Date and Time"
            variant="standard"
            value={dateTimeInput}
            onChange={(e) => {
              setDateTimeInput(e.target.value);
              //dispatch(foodSliceActions.setUserInput(e.target.value));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CaloryBreakdown;
