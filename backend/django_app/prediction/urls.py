from django.urls import path
from .views import predict

urlpatterns = [
    path('predict/<int:week>', predict, name = 'api_predict'),
]