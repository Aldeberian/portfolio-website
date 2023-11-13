import Navbar from "../components/Navbar";
import './ProjectsPage.css';
import Projects from '../data/ProjectsData'
import Title from "../components/Title";
const ProjectsPage = () => {
    return (
        <div className="max-h-screen max-w-screen">
            <Navbar/>
            <Title/>
            <div className="flex-1 flex flex-wrap justify-center">
                {Projects.map((project) => (
                    <div className="text-gray-300 box m-2 bg-csprim flex flex-col flex-nowrap rounded-xl lg:w-1/4 min-w-[300px] h-[200px]">
                        <p className="w-full p-5 text-center font-rubiktitle uppercase">{project.title}</p>
                        <p className="flex-1 m-3 font-rubiktitle">{project.description}</p>
                        <div className="flex flex-row justify-end gap-1 pr-2 pb-1">
                            {project.pictures.map((picture) => (
                                <img src={picture.path} alt={picture.alt}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProjectsPage;