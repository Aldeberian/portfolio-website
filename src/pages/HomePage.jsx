import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col lg:flex-row lg:overflow-hidden overflow-y-auto ">
            <div className="w-full lg:w-1/2 lg:h-full flex-1 p-4">Element 1</div>
            <div className="w-full lg:w-1/2 lg:h-full flex-1 p-4">
                <Link to="/Projects"> My projects </Link>
            </div>
        </div>
    )
};

export default HomePage;