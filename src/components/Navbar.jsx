import { useScrollTop } from "../hooks/use-scroll-top";

const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div
            className={`max-w-screen max-h-10 font-bodytxt pr-8 w-full p-4 flex justify-end gap-4 ${
                scrolled ? 'fixed top-0 z-50' : 'top-0 sticky'
            } rounded`}
        >
            <a href="https://github.com/Aldeberian"><img src="/github_logo.png" alt="Github" className="hover:h-11 transition-all ease-in-out h-10 font-bodytxt"/></a>
            <a href="https://www.linkedin.com/in/ceiras/"><img src="/linkedin_logo.png" alt="LinkedIn" className="hover:h-11 transition-all ease-in-out h-10 font-bodytxt "/></a>
        </div>
    );
};

export default Navbar;
