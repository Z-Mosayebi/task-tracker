import Task from "./Task";
import { AnimatePresence } from "framer-motion";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <AnimatePresence>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </AnimatePresence>
  );
};

export default Tasks;
