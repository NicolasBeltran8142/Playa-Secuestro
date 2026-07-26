from rest_framework import viewsets, parsers
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    parser_classes = (parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()