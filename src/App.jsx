import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
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