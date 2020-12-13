import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'

function App() {

    const [loadersList, setLoaderList] = useState([])

    function handleClick () {
        setLoaderList(data.loaders)
    }
    return(
        <div>
             <h1>
                Que linda aplicasion hecha en React.js
             </h1>
                <ul>
                    {
                      loadersList.map( item => <Loader key={item.id} {...item} />)  
                    }
                </ul>
                <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App