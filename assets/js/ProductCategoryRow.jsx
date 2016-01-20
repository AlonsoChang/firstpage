import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class ProductCategoryRow extends React.Component {
  
   static propTypes = { };

   static defaultProps = {  };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) { super(props); }
  
   render() {
       return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
}