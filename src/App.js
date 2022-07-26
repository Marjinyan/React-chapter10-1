import {useState} from 'react'
import OrderedList from './OrderedList'
import UnorderedList from './UnorderedList'
import './App.css'

function App(){
  const [writers, setWriters] = useState([
    "Kafka", "Saramago", "Shakespeare", "Joyce", "Dostoevsky"
  ]);

  const [log, setLog] = useState(null)

  const [status, setStatus] = useState(true)
  
  return <div className="App">
    <button onClick={() => setStatus(!status)}>SWITCH</button>

    <h3>{log}</h3>

    {status ? <p>ORDERED</p> : <p>UNORDERED</p>}
    {
      status ? 
        <OrderedList 
          fn={setLog}
          data={writers} />
          :
        <UnorderedList 
          fn={setLog}
          data={writers} />
    }
  </div>
}

export default App;