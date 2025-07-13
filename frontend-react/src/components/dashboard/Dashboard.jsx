import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../axiosinstance'

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
      const response = await axiosInstance.post('/predict', { ticker: stockId });
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;
      const plotUrl = response.data.plot_img ? `${backendRoot}${response.data.plot_img}` : null;
      
      console.log({success_response: plotUrl});
      // Set plot
      plotUrl && setPlot(plotUrl);
      response.data.error && setError(response.data.error)
      error && setError(''); // Reset error after submission

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
        <div className='jusify-center w-full'>
          <form method="POST" className='flex-col flex jusify-center' onSubmit={sendData}>
            <input 
              type="text"
              placeholder='enter stock ticker e.g. AAPL, TSLA'
              name="ticker"
              className="justify-center w-full"
              value={stockId}
              onChange={(e) => setStockId(e.target.value)}
            />
              <small>{error && <div className='text-red-500'>{error}</div>}</small>
            <br />
            <button type="submit">
            {loading ? <span><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</span> : 'See prediction'}
            </button>
          </form>

          {/* Print Prediction Plots */}
          <div className="">
            <div className="p-5">
              {plot && (
                <img src={plot} style={{ maxWidth: '100%' }} alt="Prediction Plot" className="w-full h-auto" />
              )}  
            </div>  
          </div>

        </div>
    </div>
    </>
  )
}
