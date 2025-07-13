import React, {useState} from 'react'
import axios from 'axios'

export default function Dashboard() {

  const [stockId, setStockId] = useState('');
  const sendData = async (e) => {
    e.preventDefault();

    console.log({ test: stockId})
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/predict', { ticker: stockId });
      console.log({success_response: response.data});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
    <div className=''>Dashboard</div>
    <div  className="flex-col flex items-center justify-center">
        <br />
        <div className='jusify-center'>
          <form method="POST" onSubmit={sendData}>
            <input 
              type="text"
              placeholder='enter ticker id'
              name="ticker"
              className=""
              value={stockId}
              onChange={(e) => setStockId(e.target.value)}
              />
            <button type="submit">send ticker</button>
          </form>
        </div>
    </div>
    </>
  )
}
