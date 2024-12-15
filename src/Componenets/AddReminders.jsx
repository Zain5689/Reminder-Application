import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReminder, clear } from "../Redux_Tools/Reminders";
import Show from "./Show";
import "../App.css";

function AddReminder() {
  const items = useSelector((state) => state.Reminders.items);
  const [Task, setTask] = useState("");
  const [Date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddPost = () => {
    if (Task != "" || Date != "") {
      dispatch(addReminder({ id: items.length, Task, Date }));
      setTask("");
      setDate("");
    }
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <h2>Add Reminder</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Task"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="Date"
              placeholder="Add Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br></br>

            <Show items={items} />
            <br></br>
            <button onClick={handleAddPost} className="btn btn-info">
              Add Task
            </button>
            <button
              onClick={() => {
                dispatch(clear());
              }}
              className="btn btn-danger "
            >
              {" "}
              Clear
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddReminder;
