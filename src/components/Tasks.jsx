import { ChevronRightIcon, TrashIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaksClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    //faz tratamento necessario na string pra nao ter conflito qnd passa no searchParams
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {/* pra cada props q eu recebo, vc renderiza um paragrafo */}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            //quando vc tem uma prop que é uma função e vc precisa ela qnd vc clicar num botão e vc precisa passar algum parametro:
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}>
            {task.title}
          </button>
          {/* {task.isCompleted ? "COMPLETO ALOOO" : " DFF INCOMPLETO"} */}
          <Button
            onClick={() => {
              onSeeDetailsClick(task);
            }}>
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => {
              onDeleteTaksClick(task.id);
            }}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

//map, pra cada elemento ele renderiza, precisa passa a key - identifica quem é quem

// ter o estado no componente app
// e um componente que é renderizado pelo app, ou seja que é filho do app
// o app renderiza o componente tasks(componente filho do app)
// então qnd vc precisa que um componente filho atualize o estado / state que esta no componente pai, vc pode segur essa abordagem:

// vc cria uma função no componente pai, ou seja, no app
// que altera o states e vc passa essa função como props para o componente filho
// e no componente filho, vc chama essa função qnd vc precisa atualizar o estado do componente pai
