import React, { useState } from 'react'

const Lista = () => {
    const [tarefa, setTarefa] = useState('')
    const [newTarefa, setNewTarefa] = useState([])

    const handleInputChange = event => setTarefa(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()
        if (tarefa.trim()) {
            setNewTarefa([...newTarefa, tarefa])
            setTarefa('')
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Tarefa"
                    type="text"
                    value={tarefa}
                />
                <button
                    data-testid="form-btn"
                    type="submit"
                >Adicione nova Terafa
                </button>
            </form>

            
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Lista de Tarefas</th>
                    </tr>
                </thead>
                <tbody>
                    { newTarefa.map((t, index) => (
                        <tr key={index}>
                            <input type="checkbox" /> {t}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Lista;
