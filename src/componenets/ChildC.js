import React, {useContext} from 'react'
import { DataContext } from '../context/dataContext'

const ChildC = () => {
    const { count } = useContext(DataContext)

    console.log('render child c')
    return (
        <div>
            <p>
                Child C <b>count {count}</b>
            </p>
        </div>
    )
}
export default ChildC
