import { useState } from "react";
import Leftpanel from "./components/Leftpanel"
import Rightpanel from "./components/Rightpanel";
const Codepage = () => {
const [code, setcode] = useState(
    {
        html: "<h1>Hello From SandBoxStudio</h1>",
        css: `*{
margin: 0;
padding: 0;
}`,
        js: "alert(`Your Js is Fully Working! REMOVE THE JS CODE TO STOP SEEING THIS ALERT`)"
    }
) 
const [activeTab, setActivetab] = useState("html")
    return(
        <div className="code-page flex">
            <Leftpanel 
            activeTab ={activeTab}
            setActivetab={setActivetab}        
            code={code[activeTab]}
            onCodeChange={(newText)=>{
            setcode((previous) => ({
                                ...previous,
                                [activeTab]: newText,
                            }))
                        }}
            />
            <Rightpanel
                html={code.html}
                css={code.css}
                js={code.js}
            />
        </div>
    )
}

export default Codepage;