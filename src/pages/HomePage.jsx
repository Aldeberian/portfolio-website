import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col lg:flex-row lg:overflow-hidden overflow-y-auto ">
            <div className="bg-transparent lg:w-1/2 lg:h-full flex-1 p-4 text-7xl font-titletxt">
                <p>LOREM ipsum IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
                <p className="test2">ipsum</p>
            </div>
            <div className="w-full lg:w-1/2 lg:h-full flex-1 p-4">
                <Link to="/Projects" className="font-bodytxt "> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </Link>
            </div>
        </div>
    )
};

export default HomePage;