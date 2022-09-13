import React, { useEffect, useState } from 'react'

import API_KEY from './components/keys'


const CONTEXT_KEY = 'd2f0b006eb465484d'
function useGoogleSearch(term) {

    const [data , setData] = useState(null)

    useEffect(() => {

       async function fetchdata (){

            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                
                setData(result)
            })
       } 

        fetchdata();
    },[term])


    return { data }
  
}

export default useGoogleSearch