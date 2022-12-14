import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { historySliceActions } from "../../store/history-slice.js";

import styles from "./index.module.css";

import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
  //date and time picker:
  const [dateTimeValue, setDateTimeValue] = React.useState(
    // new Date("2014-08-18T21:11:54")
    new Date(Date())
  );
  //Modal dialogue related
  const [open, setOpen] = React.useState(false);

  //handle date and time picker on change event
  const handlePickerChange = (newValue) => {
    console.log(typeof newValue);
    console.log(newValue);
    setDateTimeValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const dateTime = new Date().toLocaleString();
    const historyID = currentUser + ">" + dateTime; //ID = userName + the button click time

    // save the history to historySlice
    const newHistoryItem = {
      historyID: historyID,
      userName: currentUser,
      title: titleInput,
      totalCalory: totalCalory,
      apiResult: apiOutput, //same as apiOutput in food-slice.js
      dateTimeOfMeal: dateTimeValue,
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
    <Container maxWidth="md" className={styles.container}>
      <Typography variant="h7" gutterBottom>
        Breakdown:
      </Typography>
      <List
        sx={{ width: "100%", maxWidth: 720 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {apiOutput.map((item, index) => (
          <ListItem
            // divider="false"
            sx={{
              color: "success.dark",
              display: "block",
              fontWeight: "bold",
              mx: 0.5,
              fontSize: 14,
            }}
            key={item[1].foodId}
          >
            <Box sx={{ display: "inline" }}>
              <ListItemText
                primary={`${item[0]} serving of ${item[1].label}`}
                sx={{ display: "inline" }}
                //className={styles.listName}
              />

              <Button
                type="submit"
                variant="text"
                color="primary"
                size="small"
                sx={{ display: "inline", ml: 16 }}
                //className={styles.moreNutritionBtn}
                endIcon={<KeyboardArrowRightIcon />}
                onClick={() => navigate(`/food/${index}`)}
              >
                More Nutrition Details
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        className={styles.saveButton}
        size="small"
        endIcon={<SaveIcon />}
        onClick={handleClickOpen}
      >
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
            sx={{
              mb: 3,
              mt: 2,
            }}
            autoFocus
            required
            id="title"
            label="Meal Type"
            variant="outlined"
            value={titleInput}
            onChange={(e) => {
              setTitleInput(e.target.value);
              //dispatch(foodSliceActions.setUserInput(e.target.value));
            }}
          />
          {/* <TextField
            required
            id="datetime"
            label="Date and Time"
            variant="standard"
            value={dateTimeInput}
            onChange={(e) => {
              setDateTimeInput(e.target.value);
              //dispatch(foodSliceActions.setUserInput(e.target.value));
            }}
          /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date Of the Meal"
                inputFormat="MM/dd/yyyy"
                value={dateTimeValue}
                onChange={handlePickerChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CaloryBreakdown;

// return (
//   <div>
//     <h3>Breakdown </h3>
//     <ul>
//       {apiOutput.map((item, index) => (
//         <li key={item[1].foodId}>
//           {item[0]} serving {item[1].label}
//           <Button
//             type="submit"
//             variant="outlined"
//             color="primary"
//             size="small"
//             endIcon={<KeyboardArrowRightIcon />}
//             onClick={() => navigate(`/food/${index}`)}
//           >
//             More Nutrition detail
//           </Button>
//         </li>
//       ))}
//     </ul>
//     <Button
//       variant="contained"
//       endIcon={<SaveIcon />}
//       onClick={handleClickOpen}
//     >
//       Save this to your History
//     </Button>
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Save to Your Histroy</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           To save the calory and food items, please fill the form and click
//           Save button.
//         </DialogContentText>
//         <TextField
//           sx={{
//             mb: 3,
//             mt: 2,
//           }}
//           autoFocus
//           required
//           id="title"
//           label="Meal Type"
//           variant="outlined"
//           value={titleInput}
//           onChange={(e) => {
//             setTitleInput(e.target.value);
//             //dispatch(foodSliceActions.setUserInput(e.target.value));
//           }}
//         />
//         {/* <TextField
//           required
//           id="datetime"
//           label="Date and Time"
//           variant="standard"
//           value={dateTimeInput}
//           onChange={(e) => {
//             setDateTimeInput(e.target.value);
//             //dispatch(foodSliceActions.setUserInput(e.target.value));
//           }}
//         /> */}
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <Stack spacing={3}>
//             <DesktopDatePicker
//               label="Date Of the Meal"
//               inputFormat="MM/dd/yyyy"
//               value={dateTimeValue}
//               onChange={handlePickerChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleSave}>Save</Button>
//         <Button onClick={handleCancel}>Cancel</Button>
//       </DialogActions>
//     </Dialog>
//   </div>
// );
