import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { foodSliceActions } from "../../store/food-slice.js";

import Card from "../../UIWrapper/Card";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BatteryStdIcon from "@mui/icons-material/BatteryStd";
import SetMealIcon from "@mui/icons-material/SetMeal";
import CurrencyFrancIcon from "@mui/icons-material/CurrencyFranc";
import InterestsIcon from "@mui/icons-material/Interests";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NutritionDetial = () => {
  let params = useParams();
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const foodNutrition = apiOutput[params.foodIdex][1].nutrients;
  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
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
              {apiOutput[params.foodIdex][1].label} Nutrition Details
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
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BatteryStdIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Energy: ${foodNutrition.ENERC_KCAL} KCal`}
                  secondary="per 100g"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SetMealIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Protein: ${foodNutrition.PROCNT}`}
                  secondary="per 100g"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CurrencyFrancIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={` FAT: ${foodNutrition.FAT}`}
                  secondary="per 100g"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <InterestsIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Fibre: ${foodNutrition.FIBTG}`}
                  secondary="per 100g"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={8}>
            <ImageList sx={{ width: "200%", height: "100vh", margin: "2px" }}>
              <ImageListItem key={apiOutput[params.foodIdex][1].foodId}>
                <img
                  src={apiOutput[params.foodIdex][1].image}
                  alt={apiOutput[params.foodIdex][1].label}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default NutritionDetial;

{
  /* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BatteryStdIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Energy: ${foodNutrition.ENERC_KCAL} KCal`}
            secondary="per 100g"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SetMealIcon color="success" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Protein: ${foodNutrition.PROCNT}`}
            secondary="per 100g"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyFrancIcon color="action" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={` FAT: ${foodNutrition.FAT}`}
            secondary="per 100g"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InterestsIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Fibre: ${foodNutrition.FIBTG}`}
            secondary="per 100g"
          />
        </ListItem>
      </List> */
}
