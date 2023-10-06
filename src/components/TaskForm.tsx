import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import categories from '../categories';

import Task from '../types/Task';
import styled from 'styled-components';


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
`;

const TaskFormContainer = styled.div`
  position: fixed;
  top: 6rem;
  width: 50em;

  .errors {
    margin-top: .5rem;
    color: red;
  }
`;

const TaskFormData = z.object({
  title: z
    .string()
    .min(3, { message: 'Title should be at least 3 characters' })
    .max(50, { message: 'Title must contain at most 50 character(s)' }),
  dueDate: z
    .string().nonempty({ message: "Please select a date", }),
  category: z
    .string().nonempty("Please select a category")
});


interface PropsTaskForm {
  onSubmit: (e: any) => void;
};


export default function TaskForm({ onSubmit }: PropsTaskForm) {

  const form = useForm<Task>({
    defaultValues: {
      title: "",
      dueDate: undefined,
      category: "",
    },
    resolver: zodResolver(TaskFormData)
  });

  const { register, handleSubmit, formState, } = form;
  const { errors } = formState;

  const onSubmitHandle = (data: Task) => {
    if (data !== undefined) {
      onSubmit(data)
    }
    form.reset()
    // console.log(data)
  }


  return (
    <TaskFormContainer>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title" >Title</label>
          <input className="form-control"
            type="text"
            id="title"
            {...register("title")}
          />
          {errors.title?.message && <p className="errors">{errors.title?.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="dueDate" >Due Date</label>
          <input className="form-control"
            type="date"
            id="dueDate"
            {...register("dueDate")}
          />
          {errors.dueDate?.message && <p className="errors">{errors.dueDate?.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="category" >Category</label>
          <select className="form-select"
            id="category"
            {...register("category")}
          >
            {categories.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>
          {errors.category?.message && <p className="errors">{errors.category?.message}</p>}
        </div>

        <Button >Submit</Button>

      </form >

    </TaskFormContainer>
  );
};
