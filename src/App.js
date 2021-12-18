import './App.css';
import { Rota } from './Routes/Routes';
import CollapsedProvider from './Context/MenuCollapsed';
import ApiProvider from './Context/apiContext';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <CollapsedProvider>
          <Rota/>
        </CollapsedProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
