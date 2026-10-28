import github from './assets/github.png'
import linedin from './assets/OIP.webp'
const About = () => {
    return(
        <div className="About bg-gray-950 h-full min-h-screen w-full text-[#ededed] flex flex-col">
            <div className="flex items-center justify-center p-4">
            <h1 className="font-noraml text-[35px]">SandBoxStudios</h1>
            </div>
            <div className="font-thin flex flex-col items-center justify-center">
            <p>SandBoxStudio is an IN - BROWSER Code Editor, it's main purpose is to provide those developers who have low-end pc with a place to code without worrying about lag.</p>
            <p className="thin">This App is created by - <span className="font-bold">Sarthak Kumar</span> - as a Open - Source Project!</p>
            <p>All the code of this project is openly available, on GitHub!</p>
            </div>
            <div className="text-[35px] font-normal text-[#ededed] flex justify-center p-4">Contribute!</div>
            <div className="logo flex justify-center gap-4">
                <a href="https://github.com/sarthakcodes99" target='blan'><img className='rounded-[50%]' src={github} alt="" height={50} width={50}/></a>
                <a href="https://www.linkedin.com/in/sarthak-kumar-024b5b369/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDXzVOMx3QZusSXvXPZvFyg%3D%3D"><img className='rounded-[50%]' src={linedin} alt="" height={50} width={50}/></a>
            </div>
        </div>
    )
}

export default About;