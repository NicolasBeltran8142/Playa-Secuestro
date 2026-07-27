import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function TaskCard({ task }) {
  const navigate = useNavigate();

  const [limitedRegistroCreado] = useState(
    task.Registro_Creado ? task.Registro_Creado.substring(0, 10) : ''
  );

  // Determine badge color based on status
  const statusColorClass = 
    task.estado === "Incautado" ? "bg-dashboard-red/20 text-dashboard-red border-dashboard-red/30" :
    task.estado === "En Proceso" ? "bg-dashboard-orange/20 text-dashboard-orange border-dashboard-orange/30" :
    task.estado === "Liberado" ? "bg-dashboard-green/20 text-dashboard-green border-dashboard-green/30" :
    "bg-gray-500/20 text-gray-400 border-gray-500/30";

  return (
    <div className="flex justify-center w-full">
      <div 
        className="w-full flex flex-col bg-white/5 backdrop-blur-md shadow-xl hover:bg-white/10 hover:shadow-dashboard-blue/20 cursor-pointer transition-all duration-300 border border-white/10 rounded-2xl overflow-hidden group"
        onClick={() => {
          navigate(`/tasks/${task.id}`);
        }}
      > 
        {/* Photo thumbnail */}
        <div className="relative h-48 w-full overflow-hidden">
          {task.foto ? (
            <img src={task.foto} alt={`Foto de ${task.patente}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center text-zinc-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Sin foto</span>
            </div>
          )}
          
          {/* Status Badge Positioned Top-Right */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${statusColorClass}`}>
            {task.estado || "Incautado"}
          </div>
        </div>
        
        {/* Card Content */}
        <div className="flex flex-col flex-grow p-5">
          <div className="mb-3">
            <h5 className="font-bold text-xl text-white mb-1 truncate" title={task.modelo}>{task.modelo || "Sin Modelo"}</h5>
          </div>
          
          {/* Red badge with license plate */}
          <div className="flex items-center justify-between mb-4 mt-auto">
            <div className="bg-dashboard-red text-white px-3 py-1.5 rounded-lg text-sm font-mono font-bold tracking-widest shadow-[0_0_10px_rgba(230,57,70,0.4)] border border-dashboard-red/50">
              {task.patente}
            </div>
          </div>
          
          {/* Date and footer */}
          <div className="flex items-center text-start border-t border-white/10 pt-4 mt-1 justify-between">
            <div className="flex items-center text-zinc-400 text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {limitedRegistroCreado}
            </div>
            <div className="text-dashboard-blue/70 text-xs font-semibold group-hover:text-dashboard-blue transition-colors">
              Ver detalles &rarr;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        patente: PropTypes.string.isRequired,
        modelo: PropTypes.string,
        estado: PropTypes.string,
        foto: PropTypes.string,
        Registro_Creado: PropTypes.string.isRequired,
        Registro_Actualizado: PropTypes.string.isRequired
    }).isRequired
};
