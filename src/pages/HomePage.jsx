import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="flex-1 flex justify-center items-center">
                <div className="text-center mt-[-200px] leading-10 p-4 text-3xl font-bodytxt font-bold">
                    <p>Hey, I’m <span className="underline--magical">Cléo Eiras</span>, a Computer Science Student <br/>
                        currently based in Clermont-Ferrand, <span className="highlight-container"><span className="highlight">France</span></span>.</p>

                    <div className="relative top-24 flex flex-row justify-center">
                        <Link to="/Projects">
                            <button>my projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;