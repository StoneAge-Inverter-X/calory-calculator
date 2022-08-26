import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { historySliceActions } from "../../store/history-slice.js";
import { foodSliceActions } from "../../store/food-slice.js";
import styles from "./index.module.css";
import Card from "../../UIWrapper/Card";

import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";

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
              {currentUser}'s Saved History Nutrition Details
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                dispatch(foodSliceActions.setUserInput(""));

                navigate("/");
              }}
            >
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {currentUserHistory.length === 0 && <p>No saved history</p>}
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="div"
            id="nested-list-subheader"
          >
            <Typography variant="h6" gutterBottom sx={{ mt: 3, ml: -1 }}>
              {currentUser}'s Saved History
            </Typography>
          </ListSubheader>
        }
      >
        {currentUserHistory.map((item, historyIndex) => (
          <Card>
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
              <ListItemText
                primary={`${
                  item.title
                } on ${item.dateTimeOfMeal.toDateString()}:
              ${item.totalCalory} KCal`}
                secondary={secondary ? "Secondary text" : null}
                // sx={{ display: "block", fontSize: 34 }}
                className={styles.listName}
              />
              <ListItemButton
                onClick={handleClick}
                sx={{ mb: "0px", paddingBottom: "0px" }}
              >
                <ListItemIcon>
                  <ListIcon color="primary" />
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
                      <CircleIcon
                        sx={{ fontSize: 15, mr: "15px", ml: "10px" }}
                      />
                      <ListItemText
                        primary={`${foodItem[0]} serving ${foodItem[1].label}`}
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              <Button
                className={styles.deleteButton}
                color="secondary"
                endIcon={<DeleteIcon />}
                onClick={(e) => {
                  handleHistoryDelete(e, historyIndex);
                }}
              >
                Delete
              </Button>
            </ListItem>
          </Card>
        ))}
      </List>
    </Container>
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
