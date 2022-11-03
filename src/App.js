
import './App.css';
import IceCreamContainer from './Components/IceCreamContainer';
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
