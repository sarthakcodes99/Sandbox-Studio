import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="Navbar flex items-center justify-center gap-100 p-4 bg-black text-[#ededed] border-b-[0.5px] border-[#ededed]">
            <h1 className="font-normal text-[25px] bg-[#ededed] text-gray-900">SandboxStudio</h1>
            <Link className="transform transition duration-300 hover:scale-105" to={"/about"}>About</Link>
        </div>
    )   
}

export default Navbar;