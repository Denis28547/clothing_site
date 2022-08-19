import { FC } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import { TypedCartItem } from "../../store/cart/cart.types";

import "./category-preview.styles.scss";
import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link to={title}>
        <span className="title">{title.toUpperCase()}</span>
      </Link>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
