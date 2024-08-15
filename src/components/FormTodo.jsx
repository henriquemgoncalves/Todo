import React, { useState } from 'react'

const FormTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !category) return;
        addTodo(title, category)
        setTitle('');
        setCategory('');
    }

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Digite a titulo'
            value={title} 
            onChange={(e) => setTitle(e.target.value)}/>
        <select
            value={category} 
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default FormTodo
