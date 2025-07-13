from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StockPredictionSerializer
from rest_framework.response import Response

# Create your views here.
class StockPredictionView(APIView):
    def post(self, request):
        print("Received request data:", request.data)
        serializer = StockPredictionSerializer(data=request.data)
        if serializer.is_valid():
            ticker = serializer.validated_data['ticker']
            return Response({'status' : 'success', 'ticker': ticker})