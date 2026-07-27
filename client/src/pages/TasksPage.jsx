import { TaskList } from "../component/TaskList"
import { Link } from "react-router-dom"

export function TasksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 dashboard-bg min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white tracking-wide">Registro de Vehículos Incautados</h1>
        <Link to='/tasks-create'>
          <button className="bg-dashboard-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Nuevo Vehículo
          </button>
        </Link>
      </div>
      <TaskList/>
    </div>
  );
}
