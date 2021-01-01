import React from 'react'
import { useCall } from '../hooks/useCall'
import { useIsShow, useToggle } from '../hooks/useIsShow'

const Index: React.FC = () => {
    console.log('render parent')

    const toggle = useToggle()
    const { data } = useCall()

    return (
        <>
            <div>hello {data.title}!</div>
            <button onClick={toggle}>toggle</button>
            <Child />
        </>
    )
}

const Child: React.FC = () => {
    console.log('render child')

    const isShow = useIsShow()
    const { data } = useCall()

    return <>{isShow && <div>hello {data.title}! (child)</div>}</>
}

export default Index
