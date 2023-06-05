import React, {useState} from 'react';
import './App.css';
import 'reactjs-popup/dist/index.css';
import Cart from './components/PopUpCart';
import { useGetPizzasQuery } from './store/api/api';
import PagginationPizzas from './components/DisplayPizzas';
import CreatePizza from './components/create-pizza/CreatePizza';
import { SearchPanel } from './components/SearchPanel';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [queryTerm, setQueryTerm] = useState('')

  const {isLoading, data: pizzaArr} = useGetPizzasQuery(queryTerm)
  
  return (
    <div className="App">
      <div className='wrap'>
        <div className='header'>
          <h1 className='heading'>Сhoose your pizza</h1>
          <Cart />
          <div id="popup-root" />
        </div>

        <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} setQueryTerm={setQueryTerm} />
        
        {isLoading ? <h3>Loading...</h3> : <PagginationPizzas pizzasArr={pizzaArr}/>}

      </div>

      <CreatePizza />
    </div>
  );
}

export default App;
