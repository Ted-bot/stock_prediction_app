This application makes stock predictions.
Data provided by yfinance (Yahoo) API.

On the Dashboard page there is a input form and button.
The input has a place holder "enter ticker id".

Enter a stock of a company that ussually exist out of 4 characters e.g.:
- GOOG (google)
- APPL (apple)

After a stock has been specified enter the "See prediction" button, to see the prediction.

How to start application:
- Use a terminal and open the project folder


1. virtual enviroment: create venv (name folder: venv/ env) folder:
  -  pyhton3 -m venv {name folder}


2. install needed packages from requirements.txt
  - python -m pip install --requirement requirements.txt


4. activate venv:
  - source {name folder}/bin/activate


5. start django from main app folder (not in backend_drf):
  
  install needed packages for python (inside backend_drf directory
  - cd backend_drf
  - pip3 install
  - cd ..
  
  run server:
  - python3 manage.py runserver


6. start frontend app:
  - cd frontend app
  - npm run dev


frontend: 
- http://localhost:5173/
- http://localhost:5173/dashboard

backend:
- http://localhost:8000
- http://localhost:8000/api/v1/predict (post)


source api:  https://pypi.org/project/yfinance/
source to search for a specific stock: https://finance.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly9weXBpLm9yZy8&guce_referrer_sig=AQAAAEccILwW2wFjcx2pqtnhEQaOrkTp-x9OuAGbKHqO23tMUqnvlnlrXMPO5Fqrdeyr_2Uw5-KlEGbOTwFW1BAN5WmjKIM2JddVahaGKuGYgvgGvP1OYD2t8g2OX0PxRzdlaZpPdR_kOQjoOEWB_7SGjMGrUdjima-GY3WkZRNAeqO4
