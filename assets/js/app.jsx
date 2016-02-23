import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import FilterableProductTable from './FilterableProductTable.jsx'

export default class App extends React.Component {
  
    static propTypes = { };

    static defaultProps = { };

    componentDidMount() {
    }

    shouldComponentUpdate = shouldPureComponentUpdate;
  
    constructor(props) {
        super(props);
    }
  
    render() {
        return(
            <div>
                <FilterableProductTable />
            </div>
        );
    }
}