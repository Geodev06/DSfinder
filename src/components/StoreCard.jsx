import { useEffect, useState } from "react"
import Modal from "./Modal"

const StoreCard = ({ stores, search, location }) => {

    const [modal, setModal] = useState(false)

    const [storeName, setStoreName] = useState('')
    const [invId, setinvId] = useState('')

    const [storeLocation, setStoreLocation] = useState({})


    const passData = (storename, storeid, storeCoord) => {
        setStoreName(storename)
        setinvId(storeid)
        setModal(!modal)
        setStoreLocation(storeCoord)
    }

    return (
        <>
            {
                stores.length ? stores.filter((q) => search === '' || q.store_name.toUpperCase().includes(search.toUpperCase()))
                    .map((store, index) =>
                        <div key={index} onClick={() => passData(store.store_name, store.inv_id, { lat: store.lat, lng: store.long })} className="cursor-pointer hover:bg-black hover:outline-blue-400 rounded  ring-white bg-gray-900 shadow-md overflow-hidden relative hover:shadow-lg" >
                            <div className="m-4">
                                <span className="font-bold text-green-300 text-2xl uppercase ">{store.store_name}</span>
                                <span className="block text-blue-300 text-xs">{store.address}</span>
                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 mr-2 text-green-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <span className="block text-gray-500 text-xs">{store.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2 text-green-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <span className="block text-gray-500 text-xs">Contact : {store.contact === null ? '' : store.contact}</span>
                                    </div>
                                </div>
                            </div>

                        </div >

                    ) : <p className="text-white">No stores found!</p>
            }

            {
                modal ? <Modal store={storeName} setModal={setModal} modal={modal} invId={invId} storeLocation={storeLocation} location={location} /> : null
            }
        </>
    )
}
export default StoreCard