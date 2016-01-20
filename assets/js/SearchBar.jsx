import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class SearchBar extends React.Component {
  
   static propTypes = { };

   static defaultProps = {  };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) { super(props); }
  
   render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}