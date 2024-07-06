import{ combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import counterReducer from './counterReducer';
import themeReducer from './themeReducer'




const rootReducer  = combineReducers({
  counter : counterReducer,
  theme : themeReducer

});
const store = createStore(rootReducer)
 export default store;