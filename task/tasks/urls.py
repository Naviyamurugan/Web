from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.get_tasks),
    path('add/', views.add_task),
    path('update/<int:pk>/', views.update_task),
    path('delete/<int:pk>/', views.delete_task),
]