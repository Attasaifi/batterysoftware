import Sidebar from "./layout/sidebar";
import Navbar from "./layout/navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="container">

      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <Dashboard />
        </div>

      </div>

    </div>
  );
}

export default App;
