import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Signup from "./pages/signup";
import Layout from "./pages/dashbord/Layout/Index";
// import Bills from "./pages/dashbord/Purchase/Bills";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard/*" element={<Layout/>}/>
        </Routes>
    </Router>
  );
}

export default App;
