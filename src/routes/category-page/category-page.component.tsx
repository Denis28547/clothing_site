import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import "./category-page.styles.scss";

type CategoryRouteParams = {
  category: string;
};

const CategoryPage = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]); // gets products of chosen category
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">
        {category.toUpperCase()} <hr />
      </h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
