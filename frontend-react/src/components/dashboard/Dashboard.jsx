import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../axiosinstance'

export default function Dashboard() {

  const [stockId, setStockId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState(false);
  const [ma100, setMa100] = useState(false);
  const [prediction, setPrediction] = useState(false);
  const [mse, setMse] = useState(false);
  const [rmse, setRmse] = useState(false);
  const [r2, setR2] = useState(false);


  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log({ test: stockId})
    try {
      const response = await axiosInstance.post('/predict', { ticker: stockId });
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;
      const plotUrl = response.data.plot_img ? `${backendRoot}${response.data.plot_img}` : null;
      const ma100Url = response.data.plot_100_dma ? `${backendRoot}${response.data.plot_100_dma}` : null;
      const predictionUrl = response.data.plol_prediction ? `${backendRoot}${response.data.plol_prediction}` : null;
      const mse = response.data.mse ? response.data.mse : null;
      const rmse = response.data.rmse ? response.data.rmse : null;
      const r2 = response.data.r2 ? response.data.r2 : null;
      console.log({success_response: plotUrl});
      // Set plot
      plotUrl && setPlot(plotUrl);
      ma100Url && setMa100(ma100Url);
      predictionUrl && setPrediction(predictionUrl);
      mse && setMse(mse);
      rmse && setRmse(rmse);
      r2 && setR2(r2);

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
          {
            prediction ? <>
              <div className="">
                <div className="p-5">
                  {plot && (
                    <img src={plot} style={{ maxWidth: '100%' }} alt="Prediction Plot" className="w-full h-auto" />
                  )}  
                </div>  
              </div>
              <div className="">
                <div className="p-5">
                  {ma100 && (
                    <img src={ma100} style={{ maxWidth: '100%' }} alt="Prediction Plot" className="w-full h-auto" />
                  )}  
                </div>  
              </div>
              <div className="">
                <div className="p-5">
                  {prediction && (
                    <img src={prediction} style={{ maxWidth: '100%' }} alt="Prediction Plot" className="w-full h-auto" />
                  )}  
                </div>  
              </div>
              <div className="">
                <h4>Model Evalution</h4>
                <div className="p-5">
                  {mse && (
                    <div>
                      <h3>Mean Squared Error (MSE): {mse}</h3>
                      <h3>Root Mean Squared Error (RMSE): {rmse}</h3>
                      <h3>R-Squared (R2): {r2}</h3>
                    </div>
                  )}  
                </div>
              </div>
              </> :
              <div className="p-5">
                <h3 className='text-center'>Please enter a stock ticker to see a prediction</h3>
              </div>
          }

        </div>
    </div>
    </>
  )
}
