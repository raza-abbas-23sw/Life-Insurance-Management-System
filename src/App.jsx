import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <>
      <Navbar/>
      <main className="pt-20 px-4 bg-amber-300">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
