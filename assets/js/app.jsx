import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ProductTable from './ProductTable.jsx'
import SearchBar from './SearchBar.jsx'

export default class App extends React.Component {
  
   static propTypes = { };

   static defaultProps = { 
      products : [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ],
   };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) {
      super(props);
   }
  
   render() {
      return(
         <div>
            <SearchBar />
            <ProductTable products={this.props.products} />
         </div>
      );
   }
}