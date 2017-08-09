import React, {Component} from 'react';
import {connect} from 'react-redux';

import Product from "../components/Product";


class ProductList extends Component {
     constructor(props){
          super(props)
     }
    render() {
        let  productArray = this.props.product.map((product) => {
             return (
                  <Product key={product.listing_id} product={product} />
             )
        })

        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
                 {productArray}
                 console.log({productArray});
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
    if (state.currentState === 'underTwenty') {
         let filterProduct = state.product.filter((product) =>{
              return parseInt(product.price) <= 20;
         })
         return {
              products: filterProduct
         }

    } else if (state.currentState === 'overTwenty') {
         let filterProduct = state.product.filter((product) => {
              return parseInt(product.price) > 20;
         })
         return {
              products: filterProduct
         }
    } else {
         return state.product
    }
}

export default connect(mapStateToProps)(ProductList);
