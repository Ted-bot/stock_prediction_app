Start application with terminal and open the project folder


1. virtual enviroment: create venv (name folder: venv/ env) folder:
  -  pyhton3 -m venv {name folder}
 
 activate venv:
  - source {name folder}/bin/activate


2. start django from main app folder (not in backend_drf):
  
  install needed packages for python (inside backend_drf directory
  - cd backend_drf
  - pip3 install
  - cd ..
  
  run server:
  - python3 manage.py runserver


3. start frontend app:
  - cd frontend app
  - npm run dev


frontend: 
- http://localhost:5173/
- http://localhost:5173/dashboard

backend:
- http://localhost:8000
- http://localhost:8000/api/v1/predict (post)
