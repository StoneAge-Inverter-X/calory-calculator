import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const NutritionDetial = () => {
  let params = useParams();
  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  const foodNutrition = apiOutput[params.foodIdex][1].nutrients;
  return (
    // <p>
    //   {params.foodIdex}..{apiOutput[params.foodIdex][1].nutrients.FAT}
    // </p>

    <div>
      <h3>{apiOutput[params.foodIdex][1].label} Nutrition Details Breakdown</h3>

      <ul>
        <li>
          <img
            src={apiOutput[params.foodIdex][1].image}
            alt={apiOutput[params.foodIdex][1].label}
            loading="lazy"
          />
        </li>
        <li>ENERC_KCAL: {foodNutrition.ENERC_KCAL},</li>
        <li>PROCNT: {foodNutrition.PROCNT},</li>
        <li>FAT: {foodNutrition.FAT},</li>
        <li>FIBTG: {foodNutrition.FIBTG},</li>
      </ul>
    </div>
  );
};

export default NutritionDetial;
