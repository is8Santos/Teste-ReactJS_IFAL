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
            <form onSubmit={handleFormSubmit} className="Container-form">
                <input
                    className="input"
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Tarefa"
                    type="text"
                    value={tarefa}
                />
                <button
                    className="botao"
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
                        <th><h1 style={{color:"#fff"}}>Lista de Tarefas</h1></th>
                    </tr>
                </thead>
                <tbody>
                    { newTarefa.map((t, index) => (
                        <tr key={index}>
                            <td style={{color:"#fff"}}>
                            <input type="checkbox"/> {t}
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
