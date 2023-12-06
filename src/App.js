import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import ImageData from "./ImageData";
import { isError, isLoading } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <main>
        {/* <Login></Login>
        <Logout></Logout>
        <Profile></Profile>
        <ImageData></ImageData> */}
        <Gallery></Gallery>
      </main>
    </div>
  );
}

export default App;
