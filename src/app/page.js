"use client"
import { useTasks } from '@/context/TasksContext'
import React from 'react'
import { TaskCard } from '@/components/TaskCard';
function page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default page