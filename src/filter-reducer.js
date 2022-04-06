export function filterReducer(filterState, action) {
  switch (action.type) {
    // case "SORT_BY_PRICE":
    //   return { ...state, sort: action.payload };
    case "CLEAR":
      return {
        category: { men: false, women: false, kids: false },
        nofilter: true
      };
    case "MEN":
      console.log(filterState);
      console.log({ ...filterState.category, men: !filterState.category.men });
      return {
        ...filterState,
        nofilter: false,
        category: { ...filterState.category, men: !filterState.category.men }
      };

    case "WOMEN":
      console.log(filterState);
      console.log({
        ...filterState.category,
        women: !filterState.category.women
      });
      return {
        ...filterState,
        nofilter: false,
        category: {
          ...filterState.category,
          women: !filterState.category.women
        }
      };
    case "KIDS":
      console.log({
        ...filterState.category,
        kids: !filterState.category.kids
      });
      return {
        ...filterState,
        nofilter: false,

        category: { ...filterState.category, kids: !filterState.category.kids }
      };

    default:
      return filterState;
  }
}
