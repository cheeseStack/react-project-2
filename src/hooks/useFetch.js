import React, { useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    // below: for s.53 loading state to show a message whilst data is fetched
    const [isPending, setIsPending] = useState(false)
    // below: 404 page not found error
    const [error, setError] = useState(null)


    useEffect(() => {

        const controller = new AbortController()
        const fetchData = async () => {

            // while data is being fetched, show the loading message / state
            setIsPending(true)

            try {
                const res = await fetch(url, { signal: controller.signal})
                // if check to see if the "ok" status == true
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()

                // data received so loading message clears
                setIsPending(false)

                setData(json)
                setError(null)
            } catch (err) {
                if(err.name === "AbortError") {
                    console.log('the fetch was aborted');
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                    console.log(err.message);
                }
               
            }


            }
            

            
        
        fetchData()

        // aborting fetch requests: https://netninja.dev/courses/1546635/lectures/35907438
        return () => {
            controller.abort()

        }

    }, [url]) // set the url as a depencdency so that it runs again if the url changes

    return { data, isPending, error }

}
