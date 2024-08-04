import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductViewLayout from "../PageLayout/ProductViewLayout";
import PageNotFound from "../Pages/PageNotFound";
import ProductViewPage from "../Pages/ProductViewPage";

const Paths = () => {
   return (
      <BrowserRouter>

         <Routes>

            <Route path="/" element={<ProductViewLayout />}>

               <Route path="/product" element={<ProductViewPage />} />

            </Route>

            <Route path="*" element={<PageNotFound />} />

         </Routes>

      </BrowserRouter>
   );
};

export default Paths;
