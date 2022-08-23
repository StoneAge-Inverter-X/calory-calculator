import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaloryResult from "./components/CaloryResult";
import NutritionDetial from "./components/NutritionDetail";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import UserHistory from "./components/UserHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            index
            element={<p>Enter food name and servings to begin.</p>}
          />
          <Route path="/search/:queryText" element={<CaloryResult />} />
        </Route>
        <Route path="/food/:foodIdex" element={<NutritionDetial />} />
        <Route path="/history/:currentUser" element={<UserHistory />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const a = {
  text: "apple",
  parsed: [
    {
      food: {
        foodId: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
        label: "Apple",
        nutrients: {
          ENERC_KCAL: 52.0,
          PROCNT: 0.26,
          FAT: 0.17,
          CHOCDF: 13.81,
          FIBTG: 2.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
      },
    },
  ],
  hints: [
    {
      food: {
        foodId: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
        label: "Apple",
        nutrients: {
          ENERC_KCAL: 52.0,
          PROCNT: 0.26,
          FAT: 0.17,
          CHOCDF: 13.81,
          FIBTG: 2.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_apple",
          label: "Apple",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_quartered",
                  label: "quartered",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_chopped",
                  label: "chopped",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
        label: "Empire Apple",
        nutrients: {
          ENERC_KCAL: 52.0,
          PROCNT: 0.26,
          FAT: 0.17,
          CHOCDF: 13.81,
          FIBTG: 2.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_apple",
          label: "Apple",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_quartered",
                  label: "quartered",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_chopped",
                  label: "chopped",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
        label: "Sorb Apple",
        nutrients: {
          ENERC_KCAL: 52.0,
          PROCNT: 0.26,
          FAT: 0.17,
          CHOCDF: 13.81,
          FIBTG: 2.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_apple",
          label: "Apple",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_quartered",
                  label: "quartered",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_chopped",
                  label: "chopped",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_amhlqj0by3ozesbg96kkhar1atxt",
        label: "Fuji Apple",
        nutrients: {
          ENERC_KCAL: 63.0,
          PROCNT: 0.2,
          FAT: 0.18,
          CHOCDF: 15.22,
          FIBTG: 2.1,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/327/327e8b398000b83e4764ca0bab240f14.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_bfh0qoxboaspbtbj3gqnkafdf2r9",
        label: "Gala Apple",
        nutrients: {
          ENERC_KCAL: 57.0,
          PROCNT: 0.25,
          FAT: 0.12,
          CHOCDF: 13.68,
          FIBTG: 2.3,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/256/2568844fd3c89a9fa6ef0a07757ed572.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_bxlgb9vbmjhys5bt5sopab22g4ld",
        label: "Peeled Apple",
        nutrients: {
          ENERC_KCAL: 48.0,
          PROCNT: 0.27,
          FAT: 0.13,
          CHOCDF: 12.76,
          FIBTG: 1.3,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/5aa/5aac39c4acdc63e48312cea5c28329f4.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
      ],
    },
    {
      food: {
        foodId: "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
        label: "Smith Apple",
        nutrients: {
          ENERC_KCAL: 58.0,
          PROCNT: 0.44,
          FAT: 0.19,
          CHOCDF: 13.61,
          FIBTG: 2.8,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_bacmbq9afv8uq3bm26em4anhw12o",
        label: "Golden Delicious Apple",
        nutrients: {
          ENERC_KCAL: 57.0,
          PROCNT: 0.28,
          FAT: 0.15,
          CHOCDF: 13.6,
          FIBTG: 2.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/683/6838f8020957c737b95ad3236ba710a3.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_a6ew6eha0m4nx4blvb73tbhfjcw6",
        label: "Red Delicious Apple",
        nutrients: {
          ENERC_KCAL: 59.0,
          PROCNT: 0.27,
          FAT: 0.2,
          CHOCDF: 14.06,
          FIBTG: 2.3,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/e9a/e9a0cedf31414f009fba31eab13e552b.jpg",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_bolksj5afv46p1a5n3ulob8h9sgr",
        label: "Apple Pie Apples",
        nutrients: {
          ENERC_KCAL: 167.80950741564678,
          PROCNT: 1.5223941070108622,
          FAT: 7.356528684026531,
          CHOCDF: 25.355779943622316,
          FIBTG: 2.5129645332811448,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "apples; apple pie filling; ground cinnamon; pie crust",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
      ],
    },
    {
      food: {
        foodId: "food_b5gdwzob2922r0b1gja58biyt2zh",
        label: "Apple Sauce, Apple",
        nutrients: {
          ENERC_KCAL: 64.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 15.710000038146973,
          FIBTG: 2.0999999046325684,
        },
        brand: "ORGANIC",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "ORGANIC APPLES.",
        image:
          "https://www.edamam.com/food-img/561/56161c5713df86aaf6e7497e5e34913e.png",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            quantity: 0.6666666666666666,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 140.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
      ],
    },
    {
      food: {
        foodId: "food_aoxbu2aav1jyfkaq7t8rta51oc6t",
        label: "Apple Crisp Baked Apples",
        nutrients: {
          ENERC_KCAL: 123.43098125688948,
          PROCNT: 1.1109519297104795,
          FAT: 6.25952587508791,
          CHOCDF: 17.304239291186676,
          FIBTG: 2.4661969263312926,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "Gala apples; butter; apple; salt; Zante currants; apple juice; maple syrup; vanilla extract; rolled oats; pecans; brown sugar; flour; ground cinnamon",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
      ],
    },
    {
      food: {
        foodId: "food_bo3vukubebopr4aaqg098azzeilj",
        label: "Apple Sauce, Apple",
        nutrients: {
          ENERC_KCAL: 50.0,
          PROCNT: 1.1100000143051147,
          CHOCDF: 13.329999923706055,
          FIBTG: 1.100000023841858,
        },
        brand: "Santa Cruz Organic",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "ORGANIC APPLES; WATER; ASCORBIC ACID (VITAMIN C).",
        image:
          "https://www.edamam.com/food-img/ff2/ff22eb59316ca8a12d577b2c2a686e80.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pouch",
            label: "Pouch",
            quantity: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 90.0,
          },
        ],
        servingsPerContainer: 4.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pouch",
          label: "Pouch",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
      ],
    },
    {
      food: {
        foodId: "food_b5qvfsmbps2p37a54wfhjbap0a7z",
        label: "Apple Juice, Apple",
        nutrients: {
          ENERC_KCAL: 46.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 11.670000076293945,
          FIBTG: 0.0,
        },
        brand: "NORTH COAST",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "PASTEURIZED; UNFILTERED JUICE FROM 100% CERTIFIED ORGANIC APPLES.",
        image:
          "https://www.edamam.com/food-img/caa/caa7b2374125626c923be0eac7de9a7c.png",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
            label: "Milliliter",
            quantity: 240.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
            label: "Fluid ounce",
            quantity: 8.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
          label: "Fluid ounce",
        },
      ],
    },
    {
      food: {
        foodId: "food_aqgwowob88ca3wbc8oxd6aol3rfk",
        label: "Apple Country, Apples",
        nutrients: {
          ENERC_KCAL: 51.94805194805195,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 14.29220794083236,
          FIBTG: 3.1818182437450853,
        },
        brand: "Apple Country",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "Apple",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 154.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
      ],
    },
    {
      food: {
        foodId: "food_be9kxv3bo7sobaakr2rceautpjp2",
        label: "Apple Country  Apples",
        nutrients: {
          ENERC_KCAL: 7.7,
          PROCNT: 0.03899999856948853,
          FAT: 0.025,
          CHOCDF: 2.0579999923706054,
          FIBTG: 0.35999999046325687,
        },
        brand: "Apple Country",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "Apple",
        image:
          "https://www.edamam.com/food-img/9f5/9f54a8bbadc9febf4d71bc96698ab803.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            quantity: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 1.0,
          },
        ],
        servingsPerContainer: 48.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
      ],
    },
    {
      food: {
        foodId: "food_armqbo0a82zswfbbqro9hbnbjv2p",
        label: "Apple Sauce, Apple",
        nutrients: {
          ENERC_KCAL: 80.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 19.469999313354492,
          FIBTG: 1.7999999523162842,
        },
        brand: "ORGANIC",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "INGREDIENTS: ORGANIC APPLES. ORGANIC SUGAR; ORGANIC EVAPORATED CANE JUICE SYRUP AND WATER.",
        image:
          "https://www.edamam.com/food-img/0dc/0dc132aaf0609d3de61d8dcf7796c3b0.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 113.0,
          },
        ],
        servingsPerContainer: 4.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
      ],
    },
    {
      food: {
        foodId: "food_b5uvgo3bg6si3oavlqb7sb1u6hft",
        label: "Apple Sauce, Apple",
        nutrients: {
          ENERC_KCAL: 49.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 11.479999542236328,
          FIBTG: 1.600000023841858,
        },
        brand: "Eden",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "ORGANIC APPLES",
        image:
          "https://www.edamam.com/food-img/7cf/7cfcc581c4d16c0eb7213d13c8b3fee3.png",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            quantity: 0.5,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 122.0,
          },
        ],
        servingsPerContainer: 6.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
      ],
    },
    {
      food: {
        foodId: "food_a4opmsta7iqvqda2pj1xcakj3cjy",
        label: "Apple Pie, Apple",
        nutrients: {
          ENERC_KCAL: 260.0,
          PROCNT: 2.2899999618530273,
          FAT: 12.979999542236328,
          CHOCDF: 34.349998474121094,
          FIBTG: 0.800000011920929,
        },
        brand: "Original",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "INGREDIENTS: FILLING: APPLES; WATER; SUGAR; MODIFIED FOOD STARCH; CORN SYRUP; BROWN SUGAR; SALT; SPICE; XANTHAN GUM. CRUST: WHEAT FLOUR; SHORTENING BUTTER BLEND (PALM OIL; BUTTER CREAM; SALT]); PALM OIL; WATER; SOYBEAN OIL; SALT; DEXTROSE; YEAST; MONO- AND DIGLYCERIDES; APPLE JUICE CONCENTRATE.",
        image:
          "https://www.edamam.com/food-img/c99/c99e08f8da4b898948ac7bffa9fecf73.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pie",
            label: "Pie",
            quantity: 0.125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 131.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pie",
          label: "Pie",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
      ],
    },
    {
      food: {
        foodId: "food_bou532yabs6rc5ai63c53bdn9qfh",
        label: "Apple Sauce, Apple",
        nutrients: {
          ENERC_KCAL: 71.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 18.25,
          FIBTG: 1.600000023841858,
        },
        brand: "Lucky Leaf",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "INGREDIENTS: APPLES; HIGH FRUCTOSE CORN SYRUP; CORN SYRUP AND WATER. ASCORBIC ACID ADDED TO MAINTAIN COLOR.",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            quantity: 0.5,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 126.0,
          },
        ],
        servingsPerContainer: 5.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
      ],
    },
    {
      food: {
        foodId: "food_arsltzsbn5pyi7bohp9tka2i8rv4",
        label: "Apple Pie Caramel Apple",
        nutrients: {
          ENERC_KCAL: 194.42209452210525,
          PROCNT: 1.7424829245446116,
          FAT: 8.232098781093491,
          CHOCDF: 29.61460479044066,
          FIBTG: 1.8778412653323944,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "caramels; tart apples; white chocolate chips; cinnamon sugar",
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
      ],
    },
    {
      food: {
        foodId: "food_bp5264aa2ukhrqb3drbmdbps6ppm",
        label: "Apple Juice, Apple",
        nutrients: {
          ENERC_KCAL: 47.0,
          PROCNT: 0.0,
          FAT: 0.0,
          CHOCDF: 11.859999656677246,
          FIBTG: 0.0,
        },
        brand: "NORTH COAST",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "PASTEURIZED; UNFILTERED JUICE FROM 100% CERTIFIED ORGANIC APPLES.",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
            label: "Milliliter",
            quantity: 236.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
            label: "Fluid ounce",
            quantity: 8.0,
          },
        ],
        servingsPerContainer: 16.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          label: "Package",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
          label: "Fluid ounce",
        },
      ],
    },
  ],
  _links: {
    next: {
      title: "Next page",
      href: "https://api.edamam.com/api/food-database/v2/parser?session=44&app_id=f9cc3b0e&app_key=8f9c86444382c61d90e0c605b07f6f98&ingr=apple&nutrition-type=cooking",
    },
  },
};
