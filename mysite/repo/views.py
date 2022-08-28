from re import template
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def home(request):
    return Response({"message": "Hello, world!"})

@api_view(["GET","POST"])
def repo(request, page):
    return render(request, page+".html")