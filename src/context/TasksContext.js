// This need to be before everything
"use client";
import { createContext, useContext} from 'react';

export const TaskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(TaskContext)
    if(!context) throw new Error('useTasks must used within a provider')
    return context
}
export const TaskProvider = ({ children }) => {
  const tasks = [

    {
        id:1,
        title: "Example of context list",
        description: "some task"
    },
    {
        id:2,
        title: "Example of context list 2",
        description: "some 2 task"
    },
    {
        id:3,
        title: "Example of context list 3",
        description: "some 3 task"
    },
  ];
  return (
    <TaskContext.Provider 
    value={{
        tasks,
        }}
        >
      {children}
    </TaskContext.Provider>
  );
};
