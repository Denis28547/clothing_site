import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.components";
import CategoryPage from "../category-page/category-page.component";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action.js";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
