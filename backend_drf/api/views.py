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
import os
from django.conf import settings

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
            
            df = df.reset_index()

            #Generate the prediction
            plt.switch_backend('Agg')
            plt.figure(figsize=(12, 5))
            plt.plot(df.Close, label='Closing Price')
            plt.title(f"Closing price of {ticker}")
            plt.xlabel('Days')
            plt.ylabel('Close Price')
            plt.legend()

            # save the plot to a file
            plot_image_path = f'{ticker}_plot.png'
            image_path = os.path.join(settings.MEDIA_ROOT, plot_image_path)
            
            # save the plot in image directory
            plt.savefig(image_path)
            plt.close()
            plot_img = settings.MEDIA_URL + plot_image_path

            # print("Plot saved at:", image_path)

            return Response({
                'status' : 'success', 
                'plot_img': plot_img,
                })