import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  const [limitedRegistroCreado] = useState(
    task.Registro_Creado.substring(0, 10)
  );
  const [limitedRegistroActualizado] = useState(
    task.Registro_Actualizado.substring(0, 10)
  );

  return (

    <div className="flex justify-center">
      <div className=" 
      my-8 mx-5 
      card 
      lg:w-52 h-5/8 bg-base-100 shadow-xl bg-zinc-800 p-5 hover:bg-zinc-700 hover:cursor-pointer
      transition-colors duration-200 border border-zinc-700/50
      "
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
      > 
      <div className="card-header items-center text-center">
        {task.foto ? (
           <img src={task.foto} alt={`Foto de ${task.patente}`} className="rounded-xl w-full h-32 object-cover" />
        ) : (
           <div className="rounded-xl w-full h-32 bg-zinc-700 flex items-center justify-center text-zinc-500">
             Sin foto
           </div>
        )}
      </div>
        
        <div className="card-body items-center text-center py-4">
          <div className="w-full">
            <h5 className="font-bold text-lg text-white mb-1 truncate">{task.patente}</h5>
            <p className="text-sm text-zinc-400 truncate" title={task.modelo}>{task.modelo}</p>
          </div>
          

        </div>
        <div className="card-footer items-center text-start border-t border-zinc-700/50 pt-3 mt-2">
      
          <p className="text-slate-400 text-xs">Agregado: {limitedRegistroCreado}</p>
          <p className="text-slate-400 text-xs">Actualizado: {limitedRegistroActualizado}</p>
        </div>
        
    
      </div>

    </div>
    
  
  
  
  );
}
