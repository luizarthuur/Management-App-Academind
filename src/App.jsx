import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {

      const newTask = {
        ...prevState,
        taskId: Math.random(),
        text: text,
        projectId: prevState.selectedProjectId
      }

      return{
        ...prevState,
        selectedProjectId: undefined,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(){}

  function handleSelectProject(projectId){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
