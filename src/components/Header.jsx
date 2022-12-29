const Header = () => {
    return (
        <>
            <div className="mt-4 px-4 border-l-4 border-green-300 mt-12">
                <h2 className="text-green-300 text-5xl font-semibold leading-none tracking-wider">Drugstore finder</h2>
                <h3 className="text-orange-200 text-sm font-light tracking-wider mt-2">Developed by BSCS Students from LSPU-SPCC</h3>
            </div>
            <div className="text-xs mt-5 text-blue-300 flex items-end">
                <svg className="w-5 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p>Current location / </p>
                <span className="ml-1 text-white">Click the map to find your location.</span>
            </div>
        </>
    )
}
export default Header 