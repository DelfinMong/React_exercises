import './App.css';
import MultiForm from './Form/MultiForm';
import Form from './Form/Form';
import ShoppingList from './Shopping/ShoppingList';


function App() {
  return (
    <div className="App">
      <Form />
      <MultiForm />
      <ShoppingList />
    </div>
  );
}

export default App;
