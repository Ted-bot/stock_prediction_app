This application makes stock predictions.
Data provided by yfinance (Yahoo) API.

On the Dashboard page there is a input form and button.
The input has a place holder "enter ticker id".

Enter a stock of a company that ussually exist out of 4 characters e.g.:
- GOOG (google)
- APPL (apple)

After a stock has been specified enter the "See prediction" button, to see the prediction.

How to start application:
Use a terminal and open the project folder


1. virtual enviroment: create venv (name folder: venv/ env) folder :
  -  pyhton3 -m venv {name folder}


2. virtual environment is need for python install needed packages from requirements.txt :
  - python -m pip install --requirement requirements.txt


4. activate venv:
  - source {name folder}/bin/activate


5. start django from main app folder (not in backend_drf) :
  
  install needed packages for python inside backend_drf directory
  - cd backend_drf
  - create '.env' file
  - add in '.env' file :
    - SECRET_KEY=sZBX(&v*kfw0-8@^^snvljweob2oHZ~>> (generate secretkey at https://djecrety.ir/)
    - DEBUG=True
  - save file
  - pip3 install
  - cd ..
  
  run server:
  - python3 manage.py runserver


6. start frontend app:
  - cd frontend app
  - create file '.env'
  - add in '.env' file:
    - VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1
    - VITE_BACKEND_ROOT=http://127.0.0.1:8000
  - save file
  - npm run dev
  

frontend: 
- http://localhost:5173/
- http://localhost:5173/dashboard

- http://localhost:8000
- http://localhost:8000/api/v1/predict (post)


source api:  https://pypi.org/project/yfinance/
source to search for a specific stock: https://finance.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly9weXBpLm9yZy8&guce_referrer_sig=AQAAAEccILwW2wFjcx2pqtnhEQaOrkTp-x9OuAGbKHqO23tMUqnvlnlrXMPO5Fqrdeyr_2Uw5-KlEGbOTwFW1BAN5WmjKIM2JddVahaGKuGYgvgGvP1OYD2t8g2OX0PxRzdlaZpPdR_kOQjoOEWB_7SGjMGrUdjima-GY3WkZRNAeqO4


frontend: dashboard page<br />
Enter a stock identifier/ ticker like AAPL (Apple), GOOG (Google)
<img width="1043" height="396" alt="Screenshot 2025-07-15 at 13 11 35" src="https://github.com/user-attachments/assets/4b27432e-aeb9-4eb8-b955-869d9d73ded1" /><br />


// find a ticker on the following web page <a href="https://finance.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly9weXBpLm9yZy8&guce_referrer_sig=AQAAAEccILwW2wFjcx2pqtnhEQaOrkTp-x9OuAGbKHqO23tMUqnvlnlrXMPO5Fqrdeyr_2Uw5-KlEGbOTwFW1BAN5WmjKIM2JddVahaGKuGYgvgGvP1OYD2t8g2OX0PxRzdlaZpPdR_kOQjoOEWB_7SGjMGrUdjima-GY3WkZRNAeqO4">finance.yahoo</a>

<img width="1512" height="982" alt="Screenshot 2025-07-15 at 13 06 00" src="https://github.com/user-attachments/assets/7e42face-7a55-472c-aa9c-12d3a05cd836" /><br />

Enter a Stock Identifier/ Ticker:
<img width="1512" height="982" alt="Screenshot 2025-07-15 at 13 13 01" src="https://github.com/user-attachments/assets/75469c9b-5671-4752-af79-897cd6a3fe55" /><br />

Press See prediction to get a prediction:
<img width="1512" height="982" alt="Screenshot 2025-07-15 at 13 14 29" src="https://github.com/user-attachments/assets/ee32a584-60dc-4a18-b9d9-75e7f877c727" /><br />



