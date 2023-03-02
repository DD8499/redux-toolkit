import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchProduct } from './redux/slices/productSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
  const data = useSelector((state) => state)
  console.log(data, 'data');
  return (
    <div className="App">
      <header className="App-header">
        Redux-Toolkit
      </header>
    </div>
  );
}

export default App;
