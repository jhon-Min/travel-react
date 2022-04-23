import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const citys = data.map((city) => {
    return <Card id={city.id} {...city} />;
  });
  return (
    <div>
      <Navbar />

      <section className="container mt-5 px-3">{citys}</section>
    </div>
  );
}

export default App;
