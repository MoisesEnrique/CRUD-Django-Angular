from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = MovieSerializer


