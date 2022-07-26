import {useEffect} from 'react'

const OrderedList = (props) => {
    useEffect(() => {
        return () => {
            let current = new Date()
            let now = current.getHours() + ":" + current.getMinutes()
            let info = `OrderedList is destroyed at ${now}`
            props.fn(info)
        }
    }, [])
    return <ol>
        {
            props.data.map((elm, i) => {
                return <li key={i}>{elm}</li>
            })
        }
    </ol>
}

export default OrderedList