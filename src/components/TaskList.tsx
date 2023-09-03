import styled from 'styled-components';
import Task from '../types/Task';


const TaskListContainer = styled.div`
  margin-top: 27em;
  width: 50em;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .info {
    color: red;
  }
`;


interface Props {
  taskList: Task[];
  onDelete: (e: any) => void
}


export const TaskList = ({ taskList, onDelete }: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = taskList.findIndex((value) => value.id === e.currentTarget.id)
    onDelete(index)
  }

  return (
    <>
      {taskList.length > 0 ? (
        <TaskListContainer>
          <h4>Task List</h4>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {taskList.map((row, indexRow) => {
                return (<tr key={indexRow}>

                  <td >{row.title}</td>
                  <td >{row.dueDate}</td>
                  <td >{row.category}</td>
                  <td >
                    <button className="btn btn-outline-danger"
                      id={row.id}
                      onClick={(e) => handleClick(e)}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>

                </tr>)
              })}
            </tbody>
          </table>
        </TaskListContainer>
      ) : (
        <TaskListContainer><h4 className="info">No tasks yet.</h4></TaskListContainer>
      )
      }
    </>
  )
}
