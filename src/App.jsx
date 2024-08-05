import { BrowserRouter,Route,Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signing from "./pages/Signing";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";

function App() {
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="sign-in" element={<Signing/>}/>
      <Route path="sign-out" element={<SignOut/>}/>
   
    </Routes>
   
  </BrowserRouter>
  );
}

export default App;
