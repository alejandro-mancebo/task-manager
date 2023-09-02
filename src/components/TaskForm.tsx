import { useForm, Form } from "react-hook-form"

import styled from 'styled-components'

import categories from '../categories'

import { z } from "Zod"


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

const TaskFormData = z.object({
  title: z
    .string()
    .min(3, { message: 'Title should be at least 3 characters' })
    .max(50, { message: 'Title must contain at most 50 character(s)' }),
  dueDate: z
    .date({ required_error: "Please select a date", }),
  category: z
    .string({ required_error: "Please select a category", })
})


interface PropsTaskForm {
  title: string;
  dueDate: Date;
  category: string;
  onSubmit: void
}


export default function TaskForm({ title, dueDate, category, onSubmit }: PropsTaskForm) {


  return (
    <TaskFormContainer>
      <form >
        <div className="mb-3">
          <label className="form-label" htmlFor="title" >Title</label>
          <input className="form-control"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="dueDate" >Due Date</label>
          <input className="form-control"
            type="date"
            id="dueDate"
            name="dueDate"
          />
            </div>
            <div className ="mb-3">
          <label className="form-label" htmlFor="category" >Category</label>
          <select className="form-select"
            id="category"
            name="category"
          >
            <option>Select category</option>
            {categories.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>
        </div>

        <Button>Submit</Button>

      </form >

    </TaskFormContainer>
  )
}
