import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        <li className="font-normal py-1">
            <Link to={to} {...props} className={isActive ? 'cursor-pointer block px-4 flex justify-end border-r-4 border-orange-300 text-green-300 hover:text-green-300' : 'cursor-pointer block px-4 flex justify-end  hover:text-green-300'}>
                {children}
            </Link>
        </li >
    )
}
const SideNav = () => {

    const [isHidden, setisHidden] = useState(false)
    const Shownav = (e) => {
        setisHidden(!isHidden)
    }
    return (

        <div className="md:col-span-1 md:flex md:justify-end bg-gray-900">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase a-4 border-b border-green-300 p-10">
                        <a href="/" className="hover:text-green-400 text-green-300 tracking-widest">WBSAIS-LSPU-SPCC</a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden text-green-300" id="burger" onClick={Shownav}>
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>
                <ul className={isHidden ? 'text-sm mt-6 md:block mb-2 text-gray-300 pr-3' : 'text-sm mt-6 hidden md:block text-gray-300 pr-3'} id="menu">
                    <CustomLink to='/'>
                        <span>Home</span>
                        <svg className="w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></CustomLink >
                    <CustomLink to='/about'>
                        <span>About</span>
                        <svg className="w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </CustomLink >
                    <CustomLink to='/contact'>
                        <span>Team</span>
                        <svg className="w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </CustomLink >

                </ul>
            </nav>
        </div >
    )
}
export default SideNav