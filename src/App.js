import './App.css';
import { Rota } from './Components/Routes/Routes';
import CollapsedProvider from './Context/MenuCollapsed';

function App() {
  return (
    <div className="App">
      <CollapsedProvider>
        <Rota/>
      </CollapsedProvider>
    </div>
  );
}

export default App;
