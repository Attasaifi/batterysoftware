// App.js

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>⚡ Battery Shop</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">Customers</Link>
        </li>

        <li>
          <Link to="/sales">Sales</Link>
        </li>

        <li>
          <Link to="/stock">Stock</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function Customers() {
  return <h1>Customers Page</h1>;
}

function Sales() {
  return <h1>Sales Page</h1>;
}

function Stock() {
  return <h1>Stock Page</h1>;
}

function Reports() {
  return <h1>Reports Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
