import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';

export default props => {
    return <Provider store = {store}>{props.children}</Provider>
}