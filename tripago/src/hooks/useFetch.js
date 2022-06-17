import React, { useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    // below ius for s.53 loading state to show a message whilst data is fetched
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            // while data is being fetched, show the loading message / state
            setIsPending(true)

            const res = await fetch(url)
            const json = await res.json()

            // data received so loading message clears
            setIsPending(false)

            setData(json)
        }
        
        fetchData()

    }, [url]) // set the url as a depencdency so that it runs again if the url changes

    return { data, isPending }

}
