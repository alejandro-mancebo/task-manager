import styled from 'styled-components'

const Button = styled.button`
  border-radius: 8px;
  border: 0;
  padding: 0.4em 2.5em;
  color: black;
  font-size: 1.2em;
  font-weight: 600;
  background-color: lightgray;
  cursor: pointer;
  transition: background-color .9s;

  &:hover {
    background-color: #b4b4b4;
  }

  &:focus,
  &:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`
const TaskFormContainer = styled.div`
  position: fixed;
  top: 6rem;
  width: 50em;
`
export default function TaskForm() {
  return (
    <TaskFormContainer>
        <form >
            <div className ="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control"
                    id="title" name="title"
                />
            </div>
            <div className ="mb-3">
                <label htmlFor="date" className="form-label">Due Date</label>
                <input type="date" className="form-control"
                    id="due-date" name="due-date"
                />
            </div>
            <div className ="mb-3">
                <label htmlFor="category" className="form-label">Due Date</label>
                <select id="category" className="form-select">
                    <option>Disabled select</option>
                </select>
            </div>
        </form >
        <Button>Submit</Button>
    </TaskFormContainer>
  )
}
