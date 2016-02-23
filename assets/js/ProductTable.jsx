import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default class ProductTable extends React.Component {
  
   static propTypes = { };

   static defaultProps = {  };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) {
      super(props);
   }
  
   render() {
        var rows = [];
        var lastCategory = null;
        
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;
        let i = 0;
        
        this.props.products.forEach(function(product) {
            if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={i++} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}