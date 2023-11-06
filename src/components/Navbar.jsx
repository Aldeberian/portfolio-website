import { useScrollTop } from "../hooks/use-scroll-top";

const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={"max-w-screen pr-8 w-full p-4 flex justify-end gap-10 rounded" + (scrolled ? 'bg-red' : 'bg-red-200')}>
            <p>Github</p>
            <p>LinkedIn</p>
        </div>
    )
};

export default Navbar;