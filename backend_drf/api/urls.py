from django.urls import path
from .views import StockPredictionView

urlpatterns = [
    # Prediction API endpoint
    path('predict', StockPredictionView.as_view(), name='stock_prediction'),
]