import Header from "./Header"

const About = () => {

    return (
        <div className="h-screen">
            <Header />
            <div className="mt-4 p-5">
                <h1 className="text-xs text-gray-500">Drugstore finder is a web application that allows the user to find nearby drugstore and its available products. it is made up of React.js an open-source
                    framework and library that is great for creating Single Page Applications together with tailwindcss for css library and axios for api request.</h1>

            </div>

            <div className="mt-1 p-10">
                <div className="md:flex justify-between">
                </div>
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    {/* <!-- cards go here --> */}
                </div>
            </div>
        </div>
    )
}
export default About