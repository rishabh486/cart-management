import React, { useEffect, useState } from "react";
import { useCart } from "./cart-context";

const ProductListing = () => {
  const {
    state: { items, cartItems, totalPrice },
    filterState: { category, nofilter },
    dispatch
  } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(items);
  useEffect(() => {
    updatedProduct();
  }, [category]);
  function updatedProduct() {
    let sortedProducts = items;

    let categoryProducts = [];
    let fProducts = [];

    // if (sort) {
    //   sortedProducts = sortedProducts.sort((a, b) =>
    //     sort === "lowtohigh" ? a.price - b.price : b.price - a.price
    //   );
    //  if (!category.men === false && !category.women === false) {
    //   return
    //    }console.log(nofilter)
    console.log(nofilter);
    if (nofilter) {
      // setFilteredProducts(sortedProducts)
      fProducts = sortedProducts;
    }
    if (category.men) {
      categoryProducts = sortedProducts.filter(
        (item) => "men" === item.category
      );
      // return sortedProducts;
      // sortedProducts.push(...items)
      // setFilteredProducts([...filteredProducts,...categoryProducts])
      fProducts = [...fProducts, ...categoryProducts];
    }
    if (category.women) {
      categoryProducts = sortedProducts.filter(
        (item) => "women" === item.category
      );
      // sortedProducts.push(...items)
      // return sortedProducts;
      fProducts = [...fProducts, ...categoryProducts];
      // setFilteredProducts([...filteredProducts,...categoryProducts])
    }
    if (category.kids) {
      categoryProducts = sortedProducts.filter(
        (item) => "kids" === item.category
      );
      // sortedProducts.push(...items)
      fProducts = [...fProducts, ...categoryProducts];
      // setFilteredProducts([...filteredProducts,...categoryProducts])
      // return sortedProducts;
    }
    setFilteredProducts(fProducts);
  }

  //   if (women) {
  //     let newList = sortedProducts.filter(
  //       (item) => "women" === item.category.toLowerCase()
  //     );

  //     sortedProducts.push(...newList);
  //   }

  //   return sortedProducts;

  // };

  return (
    <div>
      <h1>Cart{cartItems}</h1>
      <h1>totalPrice{totalPrice}</h1>
      <div>
        {filteredProducts.map((prod) => {
          return (
            <div>
              <h1>{prod.name}</h1>
              <h2>{prod.price}</h2>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { ProductListing };
