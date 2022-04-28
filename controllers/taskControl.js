const createTask =async(req,res)=>{
    res.send("create task")
}
const deleteTask =async(req,res)=>{
    res.send("delete task")
}
const updateTask =async(req,res)=>{
    res.send("update task")
}
const getAllTask =async(req, res)=>{
    res.send("get all tasks")
}
const showStats=async(req, res)=>{
    res.send("show stats")
}

export {createTask, updateTask,deleteTask,getAllTask,showStats}