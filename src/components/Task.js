import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <motion.div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
      
      // Adding animation properties
      initial={{ opacity: 0, scale: 0.9 }} // Initial state before appearing
      animate={{ opacity: 1, scale: 1 }} // Animation to show when appearing
      exit={{ opacity: 0, scale: 0.9 }} // Animation when being removed
      layout // Automatically animate layout changes
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </motion.div>
  );
};

export default Task;
