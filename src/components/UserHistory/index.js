import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { historySliceActions } from "../../store/history-slice.js";

import * as React from "react";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListSubheader from "@mui/material/ListSubheader";
import StarBorder from "@mui/icons-material/StarBorder";

import Button from "@mui/material/Button";

// const initialHistoryState = {
//   history: [
//     {
//       historyID: "ab date time",
//       userName: "ab",
//       title: "lunch",
//       dateTimeOfMeal: "datetime",
//       userInput: "",
//       apiResult: [], //same as apiOutput in food-slice.js
//       totalCalory: 0,
//       timeSaved: "",
//     },
//     {
//       historyID: "0",
//       userName: "ab",
//       title: "dinner",
//       dateTimeOfMeal: "",
//       userInput: "",
//       apiResult: [], //same as apiOutput in food-slice.js
//       totalCalory: 0,
//       timeSaved: "",
//     },
//   ],
// };

const UserHistory = () => {
  const history = useSelector((state) => state.historySlice.history);
  const currentUser = useSelector((state) => state.foodSlice.currentUser);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const currentUserHistory = history.filter(
    (item) => item.userName === currentUser
  );

  const handleHistoryDelete = (e, historyIndex) => {
    e.preventDefault();
    console.log(historyIndex);
    dispatch(historySliceActions.deletHistoryByIndex(historyIndex));
  };
  return (
    <>
      <h1>{currentUser}'s Saved History </h1>
      {currentUserHistory.length === 0 && <p>No saved history</p>}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {currentUser}'s Saved History
          </ListSubheader>
        }
      >
        {currentUserHistory.map((item, historyIndex) => (
          <ListItem
            divider="true"
            sx={{
              color: "success.dark",
              display: "inline",
              fontWeight: "bold",
              mx: 0.5,
              fontSize: 14,
            }}
          >
            {/* <h2>
              {item.title} on the date of {item.dateTimeOfMeal}:{" "}
              {item.totalCalory} KCal
            </h2> */}
            <ListItemText
              primary={`${item.title} on the date of ${item.dateTimeOfMeal}:
              ${item.totalCalory} KCal`}
              secondary={secondary ? "Secondary text" : null}
              sx={{ display: "block" }}
            />
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Food List" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.apiResult.map((foodItem, foodItemIndex) => (
                  <ListItem>
                    {/* <li key={foodItem[1].foodId}>
                  {foodItem[0]} serving {foodItem[1].label}
                </li> */}
                    <ListItemText
                      primary={`${foodItem[0]} serving ${foodItem[1].label}`}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* <button
              onClick={(e) => {
                handleHistoryDelete(e, historyIndex);
              }}
            >
              Delete
            </button> */}
            <ListItemButton
              color="secondary"
              onClick={(e) => {
                handleHistoryDelete(e, historyIndex);
              }}
            >
              Delete
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default UserHistory;

// <ul>
// {history.map((item, index) => (
//   <li key={item.historyID}>
//     {item.apiResult[0][0]} serving {item.apiResult[0][1].label}
//   </li>
// ))}
// </ul>
