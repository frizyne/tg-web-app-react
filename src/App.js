import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { onToggleButton } = useTelegram();

  return (
    <div className="App">
      <Header></Header>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
