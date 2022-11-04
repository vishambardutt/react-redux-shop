
import './App.css';
import IceCreamContainer from './Components/IceCreamContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksiceCreamContainer from './Components/HooksiceCreamContainer';
import CakeContainer from './Components/CakeContainer';
import ChocolateContainer from './Components/ChocolateContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
     <IceCreamContainer/>
     <HooksiceCreamContainer />
     <CakeContainer />
     <ChocolateContainer />
    </div>
    </Provider>
  );
}

export default App;
