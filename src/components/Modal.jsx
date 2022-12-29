import axios from "axios"
import { useEffect, useState } from "react"
import NoFound from "./NoFound"
import RoutedMap from "./RoutedMap"


const Modal = ({ store, setModal, modal, invId, storeLocation, location }) => {

    const [products, setProducts] = useState([])



    const api = `https://www.wbsais.ml/api/getproducts/28a3d8d3441a0fddc472c8547c079575/${invId}`

    const [search, setSearch] = useState('')
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(api)
            setProducts(response.data.data)
        }
        getProducts()
    }, [api])


    const handleFilter = (e) => {
        setSearch(e.target.value)
    }
    return (
        modal ?
            <div className="fade-in fixed w-full h-full top-0 left-0 flex items-center justify-center z-40">
                <div className="absolute w-full h-full bg-gray-800" >

                </div >
                <div className="fixed w-full h-full z-40 overflow-y-auto outline-dashed p-5">
                    <div className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
                        <svg onClick={() => setModal(!modal)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-10 text-red-400">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="container mx-auto h-auto text-left p-4">
                        <div className="flex justify-between items-center pb-2 mt-4">
                            <p className="text-2xl font-bold text-white">Find Products at {store}</p>

                        </div>

                        <RoutedMap storeLocation={storeLocation} location={location} />

                        <p className="text-gray-200 text-xs">You can searh products here.</p>
                        <div className="custom-w" >
                            <div className="mt-4 flex bg-gray-900 outline-green-300 text-white rounded items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2 ml-2 text-green-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input value={search} onChange={handleFilter} type="text" placeholder="Search" className="h-10 w-full px-3 py-4 bg-gray-900 outline-none text-white rounded" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 grid lg:grid-cols-5 md:grid-cols-2 gap-8 p-5">
                        {
                            products.length ?
                                products.filter((q) => search === '' || q.product_name.toUpperCase().includes(search.toUpperCase()))
                                    .map((product, index) =>
                                        <div key={index} className="outline-green-300 cursor-pointer ring-white bg-gray-900 hover:shadow-xl overflow-hidden relative rounded-sm">
                                            <div className="flex p-10 bg-green-500">
                                                <span className="font-normal text-white text-2xl uppercase ">{product.product_name}</span>
                                            </div>
                                            <div className="m-4">
                                                <span className="block text-blue-300 text-xs w-auto bg-gray-800 p-2 rounded-xl ml-2">{product.category}</span>
                                                <div className="mt-4">
                                                    <div className="flex items-center">
                                                        {/* <svg className="w-5 mr-2 text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> */}
                                                        <span className="block text-gray-500 text-xs">Price : <span className="text-blue-500 text-xl">{'\u20B1' + product.price}</span></span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        {/* <svg className="w-5 mr-2 text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> */}
                                                        <span className="block text-gray-500 text-xs flex items-center">Available : {product.available ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-5 text-green-300">
                                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-5 text-red-300">
                                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                        </svg>}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) :
                                <NoFound />
                        }
                    </div>
                </div>
            </div > : null
    )
}
export default Modal