import "./App.css";
import Counter from "./Counter";
import Greeter from "./Greeter";
import Mood from "./Mood";
import Cart from "./Cart";

const items = [
  { id: 1, product: "Laptop", qty: 2, price: 10 },
  { id: 2, product: "AC", qty: 3, price: 15 },
  { id: 3, product: "TV", qty: 1, price: 20 },
];

function App() {
  return (
    <>
      <Cart initialItems={items} />
      <Counter />
      <Counter step={5} />
      <Mood />
      <Greeter name="Hemanth" age={24} />
    </>
  );
}

export default App;
