import React, {useState, useEffect} from 'react';
import './App.css';
import 'reactjs-popup/dist/index.css';
import Pizza from './models/Pizza';
import Order from './models/Order';
import DisplayPizzas from './components/DisplayPizzas';
import Cart from './components/PopUpCart';

const App: React.FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])
  const [orderList, setOrderList] = useState<Order[]>([])

  const updatePizza = (newPizza: Pizza): void => {
    setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: number): void => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  useEffect(() => {
    console.log(orderList)
  }, [orderList])
  
  return (
    <div className="App">
      <div className='wrap'>
        <div className='header'>
          <h1 className='heading'>Сhoose your pizza</h1>
          <Cart 
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <div id="popup-root" />
        </div>
        
        <DisplayPizzas 
          setOrderList={setOrderList}
        />
      </div>
    </div>
  );
}

export default App;
