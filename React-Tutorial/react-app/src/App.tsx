import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

/* EXPENSE FORM **************************************************************************************   

import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Water", amount: 5, category: "Utilities" },
    { id: 3, description: "Bread", amount: 5, category: "Groceries" },
    { id: 4, description: "GTA V", amount: 5, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}


*************************************************************************************/
//*************************************************************************************/
/*
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Prodct1", quantity: 1 },
      { id: 2, title: "Prodct2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    //setCart(
      //produce((draft) => {
        //const item = draft.items.find((item) => item.id === 1);
        //if (item) item.quantity++;
      //})
    //);
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1}: item)})
  };
*/

/*
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
*/

/*
const [tags, setTags] = useState(["happy", "cheerful"]);

const handleClick = () => {
  // Add item
  setTags([...tags, "exciting"]);

  // Delete item
  setTags(tags.filter((tag) => tag !== "happy"));

  // Update Item
  setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
}; 
*/

/*
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
*/
