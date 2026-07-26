import { TaskList } from "../component/TaskList"
import { Link } from "react-router-dom"

export function TasksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-bold text-white">Registro de Vehículos</h1>
        <Link to='/tasks-create'>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg">
            + Nuevo Vehículo
          </button>
        </Link>
      </div>
      <TaskList/>
    </div>
  );
}
