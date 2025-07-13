Start application

1. create virtual enviroment:
 
 create venv (name folder: venv/ env) folder:
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
