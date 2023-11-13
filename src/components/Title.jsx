import './Titlte.css';

const Title = () => {
    return (
        <div className="w-screen text-center font-bodytxt font-bold text-5xl flex flex-col items-center">
            <p className="projtxt">projects</p>
            <p>My projects</p>
            <div className="mt-5 mb-5 h-1 w-1/12 bg-csacc rounded"/>
        </div>
    )
};

export default Title;