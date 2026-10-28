const Leftpanel = ({setActivetab, activeTab, code, onCodeChange}) => {
    return(
        <div className="left-panel min-h-screen h-full w-[50%] bg-gray-800">
            <nav className="flex justify-center font-bold text-white gap-30 p-4">
                <button onClick={()=>{setActivetab("html")}} className="bg-orange-600 h-10 w-40 rounded-3xl transform transition duration-300 hover:scale-105">HTML</button>
                <button onClick={()=>{setActivetab("css")}} className="bg-blue-600 h-10 w-40 rounded-3xl transform transition duration-300 hover:scale-105">CSS</button>
                <button onClick={()=>{setActivetab("js")}} className="bg-yellow-300 h-10 w-40 rounded-3xl text-black transform transition duration-300 hover:scale-105">JS</button>
            </nav>
            <textarea
                value={code}
                onChange={(event)=> onCodeChange(event.target.value)}
                className="h-full w-full text-white min-h-screen p-4"
            ></textarea>
        </div>
    )
}

export default Leftpanel;

