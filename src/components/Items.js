import React, { useState } from "react";
import "../App.css";
const Items = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Startercultuur 25 ml ", price: 2.75, checked: true },
    { id: 2, name: "Demi water 1", price: 1.15, checked: true },
    {
      id: 3,
      name: "Kaasdoek 100 % kaoent  3 keer",
      price: 0.31,
      checked: true,
    },
    { id: 4, name: "Bekerglas van 1", price: 2.0, checked: true },
    { id: 5, name: "White wine  BAR white", price: 6.5, checked: false },
    {
      id: 6,
      name: "Domaines Ott chateau de Selle ROse",
      price: 37,
      checked: false,
    },
  ]);

  const handleChange = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
          setTotal(total + (item.checked ? item.price : -item.price));
        }
        return item;
      })
    );
  };

  React.useEffect(() => {
    setTotal(
      items.reduce((acc, item) => {
        if (item.checked) {
          return acc + item.price;
        }
        return acc;
      }, 0)
    );
  }, [items]);

  return (
    <div style={{ color: "white" }}>
      <h2 className="titleShopping">ITEMS</h2>
      <div className="ajzayeItem">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <label className="listemoon">
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleChange(item.id)}
                  />
                </div>

                <div style={{ marginRight: "20px" }}> {item.name}</div>
                <div>${item.price}</div>
              </label>
            </li>
          ))}
        </ul>{" "}
      </div>
      <h3 className="total">Total: ${total}</h3>

      <div className="dokme">
        <button className="neon-button">BUY</button>
      </div>
    </div>
  );
};

export default Items;
