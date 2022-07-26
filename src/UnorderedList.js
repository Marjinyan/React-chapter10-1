import {useEffect} from 'react'

const UnorderedList = (props) => {
    useEffect(() => {
        return () => {
            let current = new Date()
            let now = current.getHours() + ":" + current.getMinutes()
            let info = `UnorderedList is destroyed at ${now}`
            props.fn(info)
        }
    }, [])

    return <ul>
        {
            props.data.map((elm, i) => {
                return <li key={i}>{elm}</li>
            })
        }
    </ul>
}

export default UnorderedList