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

  const {isLoading, data: pizzaArr, isError} = useGetPizzasQuery(queryTerm)
  
  return (
    <div className="App">
      <div className='wrap'>
        <div className='header'>
          <h1 className='heading'>Сhoose your pizza</h1>
          <Cart />
          <div id="popup-root" />
        </div>

        {isLoading ? <h3>Loading...</h3> : 
          isError ? <h3 className='error_message'>Pizza was not found ^_^</h3> : 
            <PagginationPizzas pizzasArr={pizzaArr}/>}

        {!isError ? <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} setQueryTerm={setQueryTerm} /> : null}
        
        {!isError ? <CreatePizza /> : null}
      </div>
    </div>
  );
}

export default App;
