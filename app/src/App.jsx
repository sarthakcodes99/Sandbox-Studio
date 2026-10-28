import Navbar from "./components/Navbar";
import Main from "./components/main";
import Codepage from "./Codepage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
const App = () => {
    const [showCodePage, setShowCodepage] = useState(false)
    const handleStartCoding = ()=>{setShowCodepage(true)}
    
    
    return(
        <>
            <Navbar />
            <Routes>
                        <Route
                            path="/"
                            element={
                                showCodePage
                                ?<Codepage />
                                :<Main onstartcoding={handleStartCoding}/>
                            }
                        />
                        <Route path="/about" element={<About />}/>
            </Routes>
        </>
        
    )
}

export default App;