import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaloryResult from "./components/CaloryResult";
import NutritionDetial from "./components/NutritionDetail";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<p>Enter a search to beggin</p>} />
          <Route path="/search/:queryText" element={<CaloryResult />} />
        </Route>
        <Route path="/food/:foodIdex" element={<NutritionDetial />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
