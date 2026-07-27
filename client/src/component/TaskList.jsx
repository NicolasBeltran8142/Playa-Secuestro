import { useEffect , useState} from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./TaskCard";


export function TaskList() {
    const [tasks, setTasks] = useState([]);

    // Statistics logic
    const totalVehicles = tasks.length;

    const todayStr = new Date().toISOString().substring(0, 10);
    const nuevosHoy = tasks.filter(task => {
        if (!task.Registro_Creado) return false;
        return task.Registro_Creado.substring(0, 10) === todayStr;
    }).length;

    const enProceso = tasks.filter(task => task.estado === "En Proceso").length;
    const liberados = tasks.filter(task => task.estado === "Liberado").length;

    useEffect(()=>{
        async function loadTasks(){
            const res = await getAllTask();
            setTasks(res.data);
        }
        loadTasks();
    },[])

    return (
        <div className="w-full space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Total Vehículos</p>
                        <p className="text-3xl font-bold text-white mt-1">{totalVehicles}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-dashboard-blue/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-dashboard-blue shadow-[0_0_15px_rgba(67,97,238,0.5)]"></div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Nuevos Hoy</p>
                        <p className="text-3xl font-bold text-white mt-1">{nuevosHoy}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-dashboard-green/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-dashboard-green shadow-[0_0_15px_rgba(46,196,182,0.5)]"></div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">En Proceso</p>
                        <p className="text-3xl font-bold text-white mt-1">{enProceso}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-dashboard-orange/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-dashboard-orange shadow-[0_0_15px_rgba(247,127,0,0.5)]"></div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Liberados</p>
                        <p className="text-3xl font-bold text-white mt-1">{liberados}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-dashboard-purple/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-dashboard-purple shadow-[0_0_15px_rgba(114,9,183,0.5)]"></div>
                    </div>
                </div>
            </div>

            {/* Tasks Grid */}
            {tasks.length === 0 ? (
                <div className="text-center py-20 text-zinc-500 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
                    <p className="text-xl">No hay vehículos registrados.</p>
                    <p className="text-sm mt-2">Haz clic en &quot;Nuevo Vehículo&quot; para empezar.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tasks.map(task =>(
                        <TaskCard key={task.id} task={task}/>
                    ))}
                </div>
            )}
        </div>
    )
}
