import { useCart } from "./cart-context";

const SideBar = () => {
  const {
    filterState: {
      sort,
      category: { men, women, kids }
    },
    dispatch,
    filterDispatch
  } = useCart();

  return (
    <>
      <div class="side-bar">
        <div class="side-bar-heading">
          <div>
            <h1>Filter</h1>
          </div>
          <div>
            <button
              onClick={() => {
                console.log("hello");
                filterDispatch({ type: "CLEAR" });
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div class="price-heading">
          <h2>Price</h2>
          <div class="price-container">
            <input
              type="range"
              name="user-choice-range"
              id="user-choice-range"
              min="0"
              max="100"
              value="30"
            />
            <option value="0" label="0%"></option>
          </div>
        </div>
        <div class="category-heading">
          <div>
            <h2>Category</h2>
          </div>
          <div class="category-container">
            <label for="user-choice-check">Men's Clothing</label>
            <input
              onChange={(e) => filterDispatch({ type: "MEN" })}
              checked={men}
              value="men"
              type="checkbox"
              name="men"
              id="user-choice-check"
            />
          </div>
          <div class="category-container">
            <label for="user-choice-check">Women Clothing</label>
            <input
              onChange={(e) => filterDispatch({ type: "WOMEN" })}
              checked={women}
              value="women"
              type="checkbox"
              name="women"
              id="user-choice-check"
            />
          </div>
          <div class="category-container">
            <label for="user-choice-check">Kids Clothing</label>
            <input
              onChange={(e) => filterDispatch({ type: "KIDS" })}
              type="checkbox"
              checked={kids}
              name="kids"
              id="user-choice-check"
            />
          </div>
          <div class="category-container">
            <label for="user-choice-check">Newborn Clothing</label>
            <input
              onChange={() => dispatch({})}
              type="checkbox"
              name="user-choice-check"
              id="user-choice-check"
            />
          </div>
        </div>
        <div class="rating-heading">
          <div>
            <h2>Rating</h2>
          </div>
          <div class="rating-container">
            <label for="user-choice-radio">4stars & above</label>
            <input
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            />
          </div>
          <div class="rating-container">
            <label for="user-choice-radio">3stars & above</label>

            <input
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            />
          </div>
          <div class="rating-container">
            <label for="user-choice-radio">2stars & above</label>
            <input
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            />
          </div>
          <div class="rating-container">
            <label for="user-choice-radio">1stars & above</label>

            <input
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            />
          </div>
        </div>
        <div class="sort-by-heading">
          <div>
            <h2>Sort-by</h2>
          </div>
          <div class="sort-by-container">
            <label for="user-choice-radio">Price-Low to High</label>
            <input
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "lowtohigh" })
              }
              checked={sort && sort === "lowtohigh" ? true : false}
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            />
          </div>
          <div class="sort-by-container">
            <label for="user-choice-radio">Price-High to low</label>

            {/* <input
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "hightolow" })
              }
              checked={sort && sort === "hightolow" ? true : false}
              type="radio"
              name="user-choice-radio"
              id="user-choice-radio"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export { SideBar };
