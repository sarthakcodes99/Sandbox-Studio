const Main = ({onstartcoding}) => {
    return(
        <div className="main flex flex-col items-center justify-center min-h-screen text-[#ededed] bg-black gap-4">
            <h1 className="text-[30px] font-normal">The IN - BROWSER <span className="font-bold bg-[#ededed] text-black">Code Editor.</span></h1>
            <p className="font-thin text-[#ededed]">Code Without Installing a Code Editor.</p>
            <button onClick={onstartcoding} className="bg-[#ededed] text-black h-10 w-30">Start Coding</button>
        </div>
    )
}

export default Main;