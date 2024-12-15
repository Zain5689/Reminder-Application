import { useDispatch } from "react-redux";
import { deleteReminder } from "../Redux_Tools/Reminders";
import moment from "moment";

function Show(props) {
  const items = props.items;
  const dispatch = useDispatch();

  return (
    <>
      {items.map((item) => {
        return (
          <div className="info" key={item.id}>
            <div className="data">
              <h3>{item.Task}</h3>
              {/* <h3>{item.Date}</h3> */}
              <h3>{moment(item.Date).fromNow()}</h3>
            </div>
            <button
              onClick={() => dispatch(deleteReminder(item.id))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Show;
