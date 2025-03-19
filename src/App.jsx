import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //executa a função toda vez que houver uma mudança

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  useEffect(() => {
    // async function fetchTasks() {
    //   //Chama api
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     }
    //   );
    //   //pega os dados que ela retorna
    //   //converte pra json
    //   const data = await response.json();
    //   console.log(data);
    //   //armazena/persiste esses dados no state
    //   setTasks(data);
    // }
    // //chama da api pra pegar as tarefas já pronta
    // // fetchTasks();
  }, []);

  //vai ser executada quando clicar em uma tarfea
  //precisa receber qual tarefa esta sendo clicada
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id === taskId) {
        //se a tarefa que eu to clicando for a mesma que eu to passando, eu vou mudar o valor dela
        return { ...task, isCompleted: !task.isCompleted };
        //retornar tudo o que ta na tarefa e mudar o valor de isCompleted
      }
      //Não precisa atualizar essa tarefa
      return task;
    });

    //Atualizando meu estado pra nova lista de tarefas e essa lista de tarefas tem o isCompleted atualizado
    setTasks(newTasks);
  }

  function onDeleteTaksClick(taskId) {
    //task.id id de cada tarefa
    //taskId = id da tarefa que eu quero deletar
    //O filter cria um novo array contendo apenas as tarefas que não têm o ID igual ao taskId passado.
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaksClick={onDeleteTaksClick}
        />
        {/* onTaskClick tem acesso as props de Tasks */}
        {/* //tudo o que passa aqui tem acesso do seu componente por meio das props */}
      </div>
    </div>
  );
}

export default App;
