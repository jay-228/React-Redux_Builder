import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import Counter from './Components/Counter';
import './App.css';
import './Components/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;