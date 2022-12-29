import Map from './Map'


import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./Header"

import StoreCard from "./StoreCard"
import useGeoLocation from './useGeoLocation'

const Main = () => {
    //http://127.0.0.1:8000/api/getstores/28a3d8d3441a0fddc472c8547c079575

    const location = useGeoLocation()

    const [stores, setStores] = useState([])

    const [search, setSearch] = useState('')
    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://www.wbsais.ml/api/getstores/28a3d8d3441a0fddc472c8547c079575')
            setStores(response.data.data)
        }
        fetchData()



    }, [])


    const handleonChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <main>
                <Header />
                <div className="mt-4 text-white">
                    <Map />
                </div>

                <div className="mt-1 p-10">
                    <div className="md:flex justify-between">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-green-300 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                            </svg>
                            <h4 className="font-normal pb-2 mt-3  border-gray-200 text-green-300">Available stores</h4>
                        </div>

                        <div className="flex bg-gray-900 outline-green-300 text-white rounded items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2 ml-2 text-green-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="text" value={search} placeholder="Search" onChange={handleonChange} className="h-10 px-3 py-4 bg-gray-900 outline-none text-white rounded" />
                        </div>
                    </div>
                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        {/* <!-- cards go here --> */}
                        {
                            <StoreCard stores={stores} search={search} location={location.coordinates} />
                        }
                    </div>
                </div>
            </main >
        </>
    )
}
export default Main