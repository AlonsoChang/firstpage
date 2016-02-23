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

    shouldComponentUpdate = shouldPureComponentUpdate;
  
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            filterText: '',
            inStockOnly: false,
        };
        this._bind('loadData', '_handle_user_input');
    }

    loadData() {
        $.ajax({
            url: 'firstpage/random_product',
            dataType: 'json',
            success: (data) => {
                this.setState({products:data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    
    _handle_user_input(filterText, inStockOnly){
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }
  
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInputsChanged={this._handle_user_input}
                />
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <button  
                    onClick={this.loadData}
                >"Refresh"
                </button >
            </div>
        );
    }
}