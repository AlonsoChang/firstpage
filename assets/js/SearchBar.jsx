import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class SearchBar extends React.Component {
  
    static propTypes = { };

    static defaultProps = {  };

    shouldComponentUpdate = shouldPureComponentUpdate;
  
    _bind(...methods) {
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
    
    constructor(props) { 
        super(props); 
        this._bind('_onUserInputsChanged');
    }
   
    _onUserInputsChanged () {
        this.props.onUserInputsChanged(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    }
  
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={this.props.filterText} 
                        ref="filterTextInput"
                        onChange={this._onUserInputsChanged}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            ref="inStockOnlyInput"
                            onChange={this._onUserInputsChanged}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}