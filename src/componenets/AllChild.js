import React, {memo} from 'react'

// component
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'

const AllChild = memo(() => {

    console.log('render all child')
    return (
        <div>
            <h1>All Child</h1>
            <ChildA />
            <ChildB />
            <ChildC />
        </div>
    )
})

export default AllChild
