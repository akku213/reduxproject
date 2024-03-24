import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from '../store/store';
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <div>
        <NavBar />
    </div>
    <main>
    <Outlet />
    </main>
    </Provider>
    </>
  )
}

export default RootLayout