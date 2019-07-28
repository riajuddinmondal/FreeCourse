from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.courses),
    path('/python',views.python),
    path('/python/',views.python),
    # path('/javascript',views.javascript),
    # path('/c++',views.cplusplus),
    # path('/linux',views.linux),
    # path('/c',views.c),
    # path('/css',views.css),
    # path('/advanced-javascript',views.advancedJavascript),
    # path('/data-structure',views.dataStructure),
    # path('/git',views.git),
    # path('/bootstrap',views.bootstrap),
    # path('/flask',views.flask),
    # path('/fullstack',views.fullstack),
    # path('/advanced-java',views.advancedJava),
    # path('/fullstack-with-django',views.fullstackWtihDjango),
    # path('/android',views.android),
    # path('/kotlin',views.kotlin),
    # path('/django',views.django),
    # path('/machine-learning-python',views.machineLearningPython),
    # path('/angular',views.angular),
    # path('/php',views.php),
]
