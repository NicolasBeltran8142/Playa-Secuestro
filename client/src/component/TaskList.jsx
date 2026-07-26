import { useEffect , useState} from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./TaskCard";


export function TaskList() {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        async function loadTasks(){
            const res = await getAllTask();
            setTasks(res.data);
            
        }
        loadTasks();
    },[])
    return (
        
        <div className="w-full">
            {tasks.length === 0 ? (
                <div className="text-center py-20 text-zinc-500 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <p className="text-xl">No hay vehículos registrados.</p>
                    <p className="text-sm mt-2">Haz clic en "Nuevo Vehículo" para empezar.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {tasks.map(task =>(
                    <TaskCard key={task.id} task={task}/>
                    ))}
                </div>
            )}
        </div>
        
    )
}
