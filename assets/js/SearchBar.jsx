import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class SearchBar extends React.Component {
  
   static propTypes = { };

   static defaultProps = {  };

   shouldComponentUpdate = shouldPureComponentUpdate;
  
   constructor(props) { super(props); }
  
   render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        onclick={function(_r1, _r2){
                            console.log(_r1);
                            console.log(_r2);
                        }}
                    />
                    <p>
                        <input type="checkbox" />
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}