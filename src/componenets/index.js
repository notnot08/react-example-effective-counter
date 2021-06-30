import React, {useState, memo, useEffect} from 'react'

// context
import { DataContext } from '../context/dataContext'

// component
import AllChild from './AllChild'

const Index = memo(() => {
    const[count, setCount] = useState(1)
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('clear')
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            setLoading(!loading)
          }, 10000)
        
          return () => clearInterval(intervalId);
    }, [loading])

    console.log('render parent')
    return (
        <DataContext.Provider value={{count}}>
            <div style={{
                marginTop: 50,
                marginLeft: 50
            }}>
                <button onClick={() => setCount(count + 1)}>plus plus</button>
                <AllChild />
            </div>
        </DataContext.Provider>
    )
})

export default Index