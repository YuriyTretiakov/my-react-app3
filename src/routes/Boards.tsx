import Board from "../components/Board/Board"

export default function Boards() {
    
    const boardData = [{name: 'Срочно', tasks: [{taskName: '', status: ''}]}, {name: 'Завершено', tasks: [{taskName: '', status: ''}]}]
    return (
        boardData.map(({name, tasks},i) => <Board key={i} name={name} tasks={tasks} />)
    )
}