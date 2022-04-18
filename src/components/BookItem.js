import React, { useRef } from "react";
import { BsBookmarkCheck, BsBookmarkFill, BsBookmarkDash} from "react-icons/bs";

const BookItem = (props) => {
  const { item, removeBook, completeBook } = props;

  const inputRef = useRef(true);


  return (
    <li
      key={item.id}
      className="card"
    >
      <input
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
      />
      <div className="btns">
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeBook(item.id)}
          >
            <BsBookmarkCheck />
          </button>
        )}
        <button
          style={{ color: "red" }}
          onClick={() => removeBook(item.id)}
        >
          {" "}
          <BsBookmarkDash />
        </button>{" "}
      </div>
      {item.completed && <span className="read"><BsBookmarkFill/></span>}
      {!item.completed && <span className="unRead"><BsBookmarkFill/></span>}
    </li>
  );
};

export default BookItem;
