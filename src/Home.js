import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { isError, isLoading } from "@auth0/auth0-react";
const Home = () => {
  return (
    <div className="home">
      <Login></Login>
      <Logout></Logout>
      <Profile></Profile>

      {/* {ImageThumb
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => (
                <ImageListItem key={val.id}>
                  <img
                    srcSet={`${val.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${val.url}?w=248&fit=crop&auto=format`}
                    alt={val.tags}
                    loading="lazy"
                  />
                </ImageListItem>
              ))} */}
    </div>
  );
};

export default Home;
