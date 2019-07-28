from django.shortcuts import render


def courses(request):
    return render(request,'courses.html')

def python(request):  
    return render(request,'python.html')
