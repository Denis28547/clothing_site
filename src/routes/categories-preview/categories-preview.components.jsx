import { useSelector } from "react-redux/es/hooks/useSelector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={products}
              classOj={`${title} and ${products}`}
            />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
