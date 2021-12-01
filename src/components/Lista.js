import "./Lista.css"
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
        <div>
            <div className="Container-Geral">
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
            </div>



            <div  className="Container-Geral">
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Lista de Tarefas</th>
                    </tr>
                </thead>
                <tbody>
                    { newTarefa.map((t, index) => (
                        <tr key={index}>
                            <td>
                            <input type="checkbox"/>{t}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Lista;
