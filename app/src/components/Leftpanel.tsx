import Editor from "@monaco-editor/react"
const Leftpanel = ({ setActivetab, activeTab, code, onCodeChange }) => {
    return (
        <div className="left-panel min-h-screen h-full w-[50%] bg-gray-900">
            <nav className="flex justify-center font-bold text-white gap-30 p-4">
                <button onClick={() => { setActivetab("html") }} className="bg-orange-600 h-10 w-40 rounded-3xl transform transition duration-300 hover:scale-105">HTML</button>
                <button onClick={() => { setActivetab("css") }} className="bg-blue-600 h-10 w-40 rounded-3xl transform transition duration-300 hover:scale-105">CSS</button>
                <button onClick={() => { setActivetab("js") }} className="bg-yellow-300 h-10 w-40 rounded-3xl text-black transform transition duration-300 hover:scale-105">JS</button>
            </nav>
            <Editor
                height="calc(100vh - 80px)"
                language={activeTab === "js" ? "javascript" : activeTab}
                theme="vs-dark"
                value={code}
                onChange={(value) => onCodeChange(value ?? "")}
                options={{
                    automaticLayout: true,
                    fontSize: 16,
                    minimap: { enabled: false },
                    tabSize: 2,
                }}

            />
        </div>
    )
}

export default Leftpanel;

