import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import ProductTable from './ProductTable.jsx'
import SearchBar from './SearchBar.jsx'

export default class App extends React.Component {
  
   static propTypes = { };

   static defaultProps = { };

  componentDidMount() {
    this.loadData();
  }
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
  
    loadData() {
        $.ajax({
            url: 'firstpage/random_product',
            dataType: 'json',
            success: (data) => {
                this.setState({products:data});
                console.log(this.state.products)
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    } 

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) {
      super(props);
      this.state = {
         products:[],
       };
        this._bind('loadData');
   }
  
   render() {
      return(
         <div  >
            <SearchBar />
            <ProductTable products={this.state.products} />
            <button  
                onClick={this.loadData}
            >"Refresh"
            </button >
         </div>
      );
   }
}