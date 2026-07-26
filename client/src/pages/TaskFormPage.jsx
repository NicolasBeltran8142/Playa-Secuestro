import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createTask, deleteTask, updateTask, getTask } from "../api/task.api";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormpage() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const [showMore, setShowMore] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('patente', data.patente);
    formData.append('modelo', data.modelo);
    if (data.info_adicional) formData.append('info_adicional', data.info_adicional);

    // Solo enviamos la foto si se seleccionó un archivo nuevo (data.foto[0])
    // Si no se selecciona nada nuevo y estamos editando, mantenemos la anterior
    if (data.foto && data.foto[0]) {
      formData.append('foto', data.foto[0]);
    }

    try {
      if (params.id) {
        await updateTask(params.id, formData);
        toast.success("Vehículo actualizado", {
          position: "bottom-right",
          style: { background: "#101010", color: "white" },
        });
      } else {
        await createTask(formData);
        toast.success("Vehículo registrado", {
          position: "bottom-right",
          style: { background: "#101010", color: "white" },
        });
      }
      navigate("/tasks");
    } catch (error) {
      toast.error("Error al guardar", { position: "bottom-right" });
      console.error(error);
    }
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        try {
          const { data } = await getTask(params.id);
          setValue("patente", data.patente);
          setValue("modelo", data.modelo);
          setValue("info_adicional", data.info_adicional);
          // Mostrar si hay mas datos
          if (data.info_adicional || data.foto) {
             setShowMore(true);
          }
          if (data.foto) {
             setCurrentImage(data.foto); // data.foto trae la URL de la imagen si existe
          }
        } catch (error) {
          console.error("Error al cargar la tarea:", error);
        }
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4 mt-3">
        <h1 className="text-3xl font-bold text-white">
          {params.id ? "Editar Vehículo" : "Nuevo Vehículo"}
        </h1>
        <Link to='/tasks'>
          <button className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-white transition-colors">
            Volver a la lista
          </button>
        </Link>
      </div>

      <form onSubmit={onSubmit} className="bg-zinc-800 p-8 rounded-xl shadow-lg mt-2 border border-zinc-700">
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-400 mb-1">Patente</label>
          <input
            type="text"
            placeholder="Ej. AB-123-CD"
            {...register("patente", { required: true })}
            className="bg-zinc-900 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white p-3 rounded-lg block w-full transition-colors"
            autoFocus
          />
          {errors.patente && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-400 mb-1">Modelo</label>
          <input
            type="text"
            placeholder="Ej. Toyota Corolla 2022"
            {...register("modelo", { required: true })}
            className="bg-zinc-900 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white p-3 rounded-lg block w-full transition-colors"
          />
          {errors.modelo && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
        </div>

        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="text-indigo-400 hover:text-indigo-300 text-sm mb-4 font-medium flex items-center transition-colors"
        >
          {showMore ? "Ocultar opciones adicionales" : "+ Añadir más detalles"}
        </button>

        {showMore && (
          <div className="p-4 bg-zinc-900/50 rounded-lg mb-4 border border-zinc-700/50 space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Información Adicional</label>
              <textarea
                placeholder="Observaciones, detalles del estado, etc."
                {...register("info_adicional")}
                className="bg-zinc-900 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white p-3 rounded-lg block w-full transition-colors min-h-[100px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Foto del vehículo</label>

              {currentImage && (
                <div className="mb-3 relative group">
                  <p className="text-xs text-zinc-500 mb-2">Imagen actual:</p>
                  <img src={currentImage} alt="Vehículo actual" className="w-full max-h-48 object-cover rounded-lg border border-zinc-700" />
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                {...register("foto")}
                className="bg-zinc-900 border border-zinc-700 text-zinc-300 p-2 rounded-lg block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500/20 file:text-indigo-400 hover:file:bg-indigo-500/30 transition-all cursor-pointer"
              />
              <p className="text-xs text-zinc-500 mt-2">Formatos aceptados: JPG, PNG, WEBP.</p>
            </div>
          </div>
        )}

        <div className="pt-4 flex gap-3">
          <button className="bg-indigo-600 hover:bg-indigo-500 font-bold py-3 px-4 rounded-lg flex-1 transition-colors">
            Guardar Vehículo
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-red-900/80 hover:bg-red-600 font-bold py-3 px-4 rounded-lg flex-1 transition-colors text-white"
              onClick={async (e) => {
                e.preventDefault(); // Evita que se envíe el formulario
                const accepted = window.confirm('¿Estás seguro de eliminar este registro?')
                if (accepted){
                  try {
                    await deleteTask(params.id);
                    toast.success('Registro Eliminado', {
                      position: "bottom-right",
                      style: { background : "#101010", color : "white" }
                    });
                    navigate('/tasks');
                  } catch (error) {
                     toast.error("Error al eliminar", { position: "bottom-right" });
                  }
                }
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
