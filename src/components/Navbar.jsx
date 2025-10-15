import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="bg-green-900 flex flex-row justify-between text-white p-4 text-center font-bold fixed w-full">
        <h1 className="ml-30 text-3xl">Baho</h1>
        <div className=" flex gap-12 mr-70">
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/doctors">Doctors </Link>
        <Link to="/services">Services </Link>
        <Link to="/contact">Contact </Link>
       </div>
        </div>

    )
}
export default Navbar