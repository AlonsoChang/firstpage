import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class ProductRow extends React.Component {
  
   static propTypes = { };

   static defaultProps = {  };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) { super(props); }
  
   render() {
        var name = this.props.product.stocked ?
                    this.props.product.name :
                    <span style={{color: 'red'}}>
                        {this.props.product.name}
                    </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}