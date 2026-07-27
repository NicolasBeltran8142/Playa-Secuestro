from django.db import models
from datetime import datetime

# Create your models here.
class Task(models.Model):
    patente = models.CharField(max_length=200)
    modelo = models.TextField(blank=True)

    ESTADO_CHOICES = [
        ('Incautado', 'Incautado'),
        ('En Proceso', 'En Proceso'),
        ('Liberado', 'Liberado'),
    ]
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='Incautado')

    Registro_Creado = models.DateTimeField(auto_now_add=True)
    Registro_Actualizado = models.DateTimeField(auto_now=True)
    info_adicional = models.TextField(blank=True)
    foto = models.ImageField(upload_to='productos', null=True, blank=True)
    
    def __str__(self):
        return self.patente
