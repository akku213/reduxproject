import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
    <div>
        <NavBar />
    </div>
    <main>
    <Outlet />
    </main>
    </>
  )
}

export default RootLayout