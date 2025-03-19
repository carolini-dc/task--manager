import React, { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //temos os dois states e estamos alterando eles conforme o usuario digita

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite sua tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Digite sua tarefa"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          //verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }

          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}>
        Adicionar
      </button>
      {/* //quando clico em adicionar eu chamo essa função que monta uma nova tarefa pegando os valores
      // dos inputs, ou seja, os states e eu atualizo meu states, setTasks*/}
    </div>
  );
}

export default AddTasks;
