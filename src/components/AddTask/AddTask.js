import React from "react";
import "./AddTask.css";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task : </label>
        <br />
        <input
          type="text"
          placeholder="Add Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
      </div>
      <div className="form-control">
        <label>Date and Time : </label>
        <br />
        <input
          type="text"
          placeholder="Add Date and Time..."
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />{" "}
      </div>
      <div className="form-control">
        <label>Set Reminder : </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          className="check-box"
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />{" "}
      </div>
      <div className="submit-button">
        <input type="submit" value="Save Task" />
      </div>
    </form>
  );
};
