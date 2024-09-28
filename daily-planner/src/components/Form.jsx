import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Prevent submission if the input is empty
    if (name.trim() === "") {
      alert("Task cannot be empty! Please enter a task.");
      return; // Do not proceed with adding the task
    }
    props.addTask(name); // Add the task if valid
    setName(""); // Clear the input field
  }

  // Function to handle input changes
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
