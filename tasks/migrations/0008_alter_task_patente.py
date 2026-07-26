from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0007_remove_task_campo1_remove_task_campo2_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="task",
            name="patente",
            field=models.CharField(max_length=200),
        ),
    ]
