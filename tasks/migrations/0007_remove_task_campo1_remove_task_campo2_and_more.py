from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0006_alter_task_foto"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="task",
            name="campo1",
        ),
        migrations.RemoveField(
            model_name="task",
            name="campo2",
        ),
        migrations.RemoveField(
            model_name="task",
            name="campo3",
        ),
        migrations.RemoveField(
            model_name="task",
            name="description",
        ),
        migrations.RemoveField(
            model_name="task",
            name="title",
        ),
        migrations.AddField(
            model_name="task",
            name="info_adicional",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="task",
            name="modelo",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="task",
            name="patente",
            field=models.CharField(default="SIN-PATENTE", max_length=200),
        ),
        migrations.AlterField(
            model_name="task",
            name="foto",
            field=models.ImageField(blank=True, null=True, upload_to="productos"),
        ),
    ]
