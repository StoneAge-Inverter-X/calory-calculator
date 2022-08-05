import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const CaloryBreakdown = () => {
  const apiOutput = useSelector((state) => state.foodSlice.apiOutput);
  let navigate = useNavigate();

  return (
    <div>
      <h3>Breakdown</h3>

      <ul>
        {apiOutput.map((item, index) => (
          <li key={item[1].foodId}>
            {item[0]} X {item[1].label}
            <button onClick={() => navigate(`/food/${index}`)}>
              More Nutrition detial
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaloryBreakdown;
