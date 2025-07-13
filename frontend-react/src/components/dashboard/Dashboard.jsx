import React, {useState} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {

  const [stockId, setStockId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState(false);


  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log({ test: stockId})
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/predict', { ticker: stockId });
      console.log({success_response: response.data});
      // Set plot

      if (response.data.error) setError(response.data.error)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className=''>Dashboard</div>
    <div  className="flex-col flex items-center justify-center">
        <br />
        <div className='jusify-center col-md-6'>
          <form method="POST" onSubmit={sendData}>
            <input 
              type="text"
              placeholder='enter ticker id'
              name="ticker"
              className=""
              value={stockId}
              onChange={(e) => setStockId(e.target.value)}
              />
            <button type="submit">
              {loading ? <span><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</span> : 'See prediction'}
            </button>
          </form>
              <small>{error && <div className='text-red-500'>{error}</div>}</small>
        </div>
    </div>
    </>
  )
}
