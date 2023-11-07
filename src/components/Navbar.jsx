import { useScrollTop } from "../hooks/use-scroll-top";

const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div
            className={`max-w-screen bg-red-200 font-bodytxt pr-8 w-full p-4 flex justify-end gap-10 ${
                scrolled ? '' : 'bg-red-50'
            } rounded`}
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 1000 // Pour s'assurer que la barre de navigation est au-dessus des autres éléments
            }}
        >
            <p>Github</p>
            <p>LinkedIn</p>
        </div>
    );
};

export default Navbar;
