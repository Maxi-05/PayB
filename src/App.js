import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
export function Inp({ submitHandler }) {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    submitHandler(purpose, amount);
    setPurpose("");
    setAmount("");
  };

  return (
    <>
      <h1 class="Title">PayBook</h1>
      <form onSubmit={onSubmitHandler} class="Form">
        <input
          id="p"
          type="text"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <input
          id="a"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/payments");
      setData(response.data);
    } catch (error) {
      console.error("error fetching items:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  const submitHandler = async (purpose, amount) => {
    try {
      const response = await axios.post("/api/payments", { purpose, amount });
      setData([...data, { purpose, amount }]);
    } catch (error) {
      console.error("error adding item:", error);
    }
  };

  return (
    <>
      <Inp submitHandler={submitHandler} />
      <div class="table">
        <table>
          <th>Purpose</th>
          <th>Amount</th>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.purpose}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
