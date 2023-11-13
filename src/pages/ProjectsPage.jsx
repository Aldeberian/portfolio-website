import Navbar from "../components/Navbar";
import './ProjectsPage.css';
import Projects from '../data/ProjectsData'
const ProjectsPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="lg:ml-20 lg:mr-20 2xl:ml-64 2xl:mr-64 lg:mt-10 flex-1 p-10 flex flex-wrap justify-around">
                {Projects.map((project) => (
                    <div className="m-2 bg-csprim rounded-xl min-w-[400px] w-5/12 h-[400px]">
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProjectsPage;