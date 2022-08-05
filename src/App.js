import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaloryResult from "./components/CaloryResult";
import NutritionDetial from "./components/NutritionDetail";

import HomePage from "./components/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<p>Enter a search to beggin</p>} />
          <Route path="/search/:queryText" element={<CaloryResult />} />
        </Route>
        <Route path="/food/:foodIdex" element={<NutritionDetial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const exampleData = {
  text: "banana",
  parsed: [
    {
      food: {
        foodId: "food_bjsfxtcaidvmhaa3afrbna43q3hu",
        label: "Banana",
        nutrients: {
          ENERC_KCAL: 89.0,
          PROCNT: 1.09,
          FAT: 0.33,
          CHOCDF: 22.84,
          FIBTG: 2.6,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
      },
    },
  ],
  hints: [
    {
      food: {
        foodId: "food_bjsfxtcaidvmhaa3afrbna43q3hu",
        label: "Banana",
        nutrients: {
          ENERC_KCAL: 89.0,
          PROCNT: 1.09,
          FAT: 0.33,
          CHOCDF: 22.84,
          FIBTG: 2.6,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
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
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_extra_large",
                  label: "extra large",
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
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_mashed",
                  label: "mashed",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      food: {
        foodId: "food_apcxoi8abwi00ka8h3sbaa6woutg",
        label:
          "Ella's Kitchen Bananas, Bananas, Bananas, Super Smooth Banana Puree Bananas",
        nutrients: {
          ENERC_KCAL: 91.71230106890907,
          PROCNT: 1.4109584779832165,
          FAT: 0.0,
          CHOCDF: 22.575335647731464,
          FIBTG: 2.821916955966433,
        },
        brand: "Ella's Kitchen",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "ORGANIC BANANAS; <1% ORGANIC LEMON JUICE CONCENTRATE.",
        image:
          "https://www.edamam.com/food-img/36a/36a899bb7eb11fa5b00bfd7a66f70ea4.png",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            quantity: 2.5,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 70.0,
          },
        ],
        servingsPerContainer: 1.0,
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
        foodId: "food_a3t5d1ubn0wxuxaddsz4oasllcdd",
        label: "Bananas, Dehydrated, or Banana Powder",
        nutrients: {
          ENERC_KCAL: 346.0,
          PROCNT: 3.89,
          FAT: 1.81,
          CHOCDF: 88.28,
          FIBTG: 9.9,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/6bc/6bcf87ba7f4f162b0d257d041d69af34.jpg",
      },
      measures: [
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
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          label: "Tablespoon",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
      ],
    },
    {
      food: {
        foodId: "food_b0f04q6aeh66mga59vdbybcjl22r",
        label: "Banana",
        nutrients: {
          ENERC_KCAL: 244.34832887665286,
          PROCNT: 4.559631624176315,
          FAT: 10.086427424552642,
          CHOCDF: 35.99461668642338,
          FIBTG: 2.8502231320038685,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "Nilla Wafer; butter; bananas; cake flour; baking soda; baking powder; salt; sugar; eggs; sour cream; whole milk; egg yolks; vanilla bean; flour; Chantilly Cream; heavy cream; raw sugar; coconut",
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
        foodId: "food_a9qgwwdanptdeuao8lhj0b7okmiq",
        label: "Banana Split Banana Bread",
        nutrients: {
          ENERC_KCAL: 277.13990536454895,
          PROCNT: 4.085695403864344,
          FAT: 11.18901642901284,
          CHOCDF: 42.20881726822129,
          FIBTG: 2.220554744213344,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "butter; sugar; brown sugar; eggs; bananas; pineapple; maraschino cherries; flour; baking powder; salt; almonds; chocolate chips",
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
        foodId: "food_bttzfrabvyh8cmablexptamzphza",
        label: "Banana Bread (Banana Cake)",
        nutrients: {
          ENERC_KCAL: 255.03496206540842,
          PROCNT: 4.764133617718374,
          FAT: 8.083024179266562,
          CHOCDF: 42.749296687803835,
          FIBTG: 2.2450758391246914,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel:
          "flour; baking powder; baking soda; salt; ground cinnamon; sugar; butter, (salted; egg white; egg; bananas; sour cream; vanilla extract; cocoa nibs",
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
      ],
    },
    {
      food: {
        foodId: "food_b0bn6w4ab49t55b1o8jsnbq6nm2g",
        label: "Bananas, Raw",
        nutrients: {
          ENERC_KCAL: 89.0,
          PROCNT: 1.09,
          FAT: 0.33,
          CHOCDF: 22.84,
          FIBTG: 2.6,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
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
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_extra_large",
                  label: "extra large",
                },
              ],
            },
          ],
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
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_mashed",
                  label: "mashed",
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
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
      ],
    },
    {
      food: {
        foodId: "food_bu5d976agc6pb0ac8b12bbd6m01l",
        label: "Banana Candy, Banana",
        nutrients: {
          ENERC_KCAL: 419.0,
          PROCNT: 0.0,
          FAT: 8.140000343322754,
          CHOCDF: 83.72000122070312,
        },
        brand: "DULCE",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "CORN SYRUP; HYDROGENATED COCONUT OIL; 2% OR LESS OF EGG WHITES; SODIUM ALGINATE; NATURAL FLAVORS; CALCIUM ACETATE; MONOGLYCERIDES; YELLOW 5.",
        image:
          "https://www.edamam.com/food-img/47a/47ab151c9680f3990f920793acdfb7dd.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 43.0,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_bar",
          label: "Bar",
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
        foodId: "food_ate5r4tbsw6lhfarjwslfaeuoh95",
        label: "Banana",
        nutrients: {
          ENERC_KCAL: 89.0,
          PROCNT: 1.100000023841858,
          FAT: 0.30000001192092896,
          CHOCDF: 23.0,
          FIBTG: 2.5999999046325684,
        },
        brand: "Dole Packaged Foods, LLC",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel: "Bananas",
        image:
          "https://www.edamam.com/food-img/2d8/2d8413480692de9716bff261a2fe0ad7.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fruit",
            label: "Fruit",
            quantity: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 100.0,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fruit",
          label: "Fruit",
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
        foodId: "food_aah9x3ka3e3n5ca0785s1ae7b70m",
        label: "Organic Banana Chips, Banana",
        nutrients: {
          ENERC_KCAL: 525.0,
          PROCNT: 2.5,
          FAT: 27.5,
          CHOCDF: 65.0,
          FIBTG: 5.0,
        },
        brand: "ORGANIC",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "ORGANIC BANANAS; ORGANIC COCONUT OIL; ORGANIC CANE SUGAR.",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            quantity: 18.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 40.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          label: "Piece",
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
        foodId: "food_b84qhlzbsrp5hwboxk9gjag8w92b",
        label: "Margie's, Banana Syrup, Banana",
        nutrients: {
          ENERC_KCAL: 203.0,
          PROCNT: 1.350000023841858,
          FAT: 0.0,
          CHOCDF: 47.29999923706055,
          FIBTG: 1.399999976158142,
        },
        brand: "Margie's",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "WHITE GRAPE JUICE CONCENTRATE; BANANA PUREE; XANTHAN GUM (THICKENER).",
        image:
          "https://www.edamam.com/food-img/31a/31a9e703aafa5f40855d642fb15eaa82.jpg",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            quantity: 0.25,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 74.0,
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
        foodId: "food_bcqoaitbngftxsazs8y1sbfa7ppf",
        label: "Banana Mega Muffin, Banana",
        nutrients: {
          ENERC_KCAL: 340.0,
          PROCNT: 4.489999771118164,
          FAT: 16.030000686645508,
          CHOCDF: 44.22999954223633,
        },
        brand: "MEGA",
        category: "Packaged foods",
        categoryLabel: "food",
        foodContentsLabel:
          "ENRICHED FLOUR (BLEACHED WHOLE WHEAT FLOUR; WHEAT FLOUR; NIACIN; FERROUS SULFATE; REDUCED IRON; THIAMINE MONONITRATE; RIBOFLAVIN; FOLIC ACID); EGG; SUGAR; VEGETABLE OIL (SOYBEAN; CANOLA); BANANA PUREE; WATER; CORN SYRUP; GLYCERIN; MODIFIED CORNSTARCH; WHEY; SODIUM ALUMINUM PHOSPHATE; SALT; BAKING SODA; PROPYLENE GLYCOL ESTERS OF FATTY ACIDS; XANTHAN GUM; MONO AND DIGLYCERIDES; SODIUM STEAROYL LACTYLATE; CELLULOSE GUM; DATEM; NATURAL AND ARTIFICIAL FLAVOR; SORBIC ACID AND POTASSIUM SORBATE (TO RETAIN FRESHNESS); ENZYMES.",
        servingSizes: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            quantity: 156.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_muffin",
            label: "Muffin",
            quantity: 1.0,
          },
        ],
      },
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_muffin",
          label: "Muffin",
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
        foodId: "food_azds4vwbq8u4boave9i3baksdmpd",
        label: "Banana Pepper",
        nutrients: {
          ENERC_KCAL: 27.0,
          PROCNT: 1.66,
          FAT: 0.45,
          CHOCDF: 5.35,
          FIBTG: 3.4,
        },
        category: "Generic foods",
        categoryLabel: "food",
        image:
          "https://www.edamam.com/food-img/9be/9bee191c9c786375955831608ca8dbe1.jpg",
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
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pepper",
          label: "Pepper",
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
        foodId: "food_bfn2tbfbzut6x6bqtbxykblga3s5",
        label: "Banana Caramel",
        nutrients: {
          ENERC_KCAL: 168.84213477637914,
          PROCNT: 0.9837796459511343,
          FAT: 4.150378931614931,
          CHOCDF: 34.058626638667405,
          FIBTG: 2.403007700785947,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "bananas; butter; sugar",
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
        foodId: "food_ahjo4saautqcfdaqamiaxbkjw8sb",
        label: "Banana Toast",
        nutrients: {
          ENERC_KCAL: 175.79710175901508,
          PROCNT: 4.697322499422595,
          FAT: 5.091825074407549,
          CHOCDF: 29.692327546662487,
          FIBTG: 3.0156693945837234,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "Bread; Butter; Banana",
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
        foodId: "food_a9mhph0akn8yk5ayay1a8b4jf8b5",
        label: "Banana Bites",
        nutrients: {
          ENERC_KCAL: 219.14000015396502,
          PROCNT: 5.632786779254334,
          FAT: 8.533866853060061,
          CHOCDF: 33.779708617299654,
          FIBTG: 4.388929535155798,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "bananas; yogurt; corn; granola",
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
        foodId: "food_bhh5cqrbu64uh5b4vzugvbbnle2s",
        label: "Banana Halwa",
        nutrients: {
          ENERC_KCAL: 195.3473274503074,
          PROCNT: 1.3234351799525959,
          FAT: 8.056491133915285,
          CHOCDF: 31.9873512592438,
          FIBTG: 1.9083805095432305,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "bananas; sugar; ghee; cashew nuts",
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
        foodId: "food_bxs5wk6ajfjyrqafu5t3kafzidk7",
        label: "Banana Milkshake",
        nutrients: {
          ENERC_KCAL: 84.94922268494328,
          PROCNT: 2.025611567355028,
          FAT: 2.9918445359357415,
          CHOCDF: 13.321756311888485,
          FIBTG: 1.1295938347957895,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "Bananas; Milk; Vanilla bean; Honey",
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
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
      ],
    },
    {
      food: {
        foodId: "food_anq0rwta25sg5zbh16ot4bcdzlcw",
        label: "Banana Popsicles",
        nutrients: {
          ENERC_KCAL: 140.78959352247662,
          PROCNT: 2.784545309561987,
          FAT: 4.046604093744239,
          CHOCDF: 21.92639080722267,
          FIBTG: 1.3846097022610009,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "pudding mix; skim milk; banana",
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
        foodId: "food_b6ijfu4afjb6fsad6ui0ybcehtqq",
        label: "Banana Shake",
        nutrients: {
          ENERC_KCAL: 85.5779035829934,
          PROCNT: 2.348410177162223,
          FAT: 3.0032924905644123,
          CHOCDF: 12.280002770502248,
          FIBTG: 0.8501172817723754,
        },
        category: "Generic meals",
        categoryLabel: "meal",
        foodContentsLabel: "Banana; Sugar; Elaichi; Milk; Dalchini",
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
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          label: "Milliliter",
        },
      ],
    },
  ],
  _links: {
    next: {
      title: "Next page",
      href: "https://api.edamam.com/api/food-database/v2/parser?session=40&app_id=f9cc3b0e&app_key=8f9c86444382c61d90e0c605b07f6f98&ingr=banana&nutrition-type=cooking",
    },
  },
};
