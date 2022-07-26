export const selectCategoriesMap = (state) => {
  // console.log(state.categories.categories);
  return state.categories.categories.reduce((acc, category) => {
    // console.log(acc);
    // console.log(category);
    const { title, items } = category;
    // console.log(items);
    // console.log((acc[title.toLowerCase()] = items));
    console.log(acc);
    acc[title.toLowerCase()] = items;
    console.log(acc);
    return acc;
  }, {});
};
