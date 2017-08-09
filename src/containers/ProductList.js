import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
         console.log(this.props);
         let listings = this.props.products.map((product, index) => {
              return (
                   <Product key={product.listing_id} product={product} />
              )
         })
     //    const {products} = this.props;
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
                 {listings}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
     console.log(state);
    // complete the `if else` statement including conditions and `products` value
    if (state.currentState === "underTwenty") {
         let product = state.products.filter((product)=> {
              // eslint-disable-next-line
              return parseInt(product.price) < 20;
         })
         return {
              products: product
         }
    } else if (state.currentState === "overTwenty"){
         let product = state.products.filter((product) => {
              // eslint-disable-next-line
              return parseInt(product.price) >=20;
         })
         return {
              products: product
         }
    } else {
         return {
         products: state.products
          }
    }
}

export default connect(mapStateToProps)(ProductList);
