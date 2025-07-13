from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StockPredictionSerializer
from rest_framework import status
from rest_framework.response import Response
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime

# Create your views here.
class StockPredictionView(APIView):
    def post(self, request):
        print("Received request data:", request.data)
        serializer = StockPredictionSerializer(data=request.data)
        if serializer.is_valid():
            ticker = serializer.validated_data['ticker']

            # Fetch the data from yfinance
            now = datetime.now()

            start = datetime(now.year-10, now.month, now.day)
            end = now
            df = yf.download(ticker, start, end)
            print("Data fetched from yfinance:", df)

            if df.empty:
                print("No data found for the ticker:", ticker)
                return Response({
                    'status': status.HTTP_404_NOT_FOUND, 
                    'error': 'No data found for the ticker.',
                    })    
            

            return Response({'status' : 'success', 'ticker': ticker})