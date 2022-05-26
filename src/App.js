import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://dechapi-dechapi-error-verdsion.azurewebsites.net/azure').then(
            (res) => setData(res.data)
        )
    }, [])

  return (
    <div className="App">
      <h1>dechapi front</h1>
        {data
            ? <h2>Answer : {data.message}</h2>
            : 'error'
        }

    </div>
  );
}

export default App;
