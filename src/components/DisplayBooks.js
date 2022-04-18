import React, { useState } from "react";
import { connect } from "react-redux";
import {addBook, completeBook, removeBook,} from "../redux/reducer";
import BookItem from "./BookItem";



const mapStateToProps = (state) => {

  return {
    books: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addBook(obj)),
    removeBook: (id) => dispatch(removeBook(id)),
    completeBook: (id) => dispatch(completeBook(id)),
  };
};

const DisplayBooks = (props) => {

  const [sort, setSort] = useState("unRead");
  return (
    <div className="displaybooks">
      <div className="buttons">
        <button onClick={() => setSort("unRead")}>
          Unread
        </button>
        <button onClick={() => setSort("read")}>
          Read
        </button>
        <button onClick={() => setSort("all")}>
          All
        </button>
      </div>
      <ul>
          {props.books.length > 0 && sort === "unRead"
            ? props.books.map((item) => {
                return (
                  item.completed === false && (
                    <BookItem
                      key={item.id}
                      item={item}
                      removeBook={props.removeBook}
                      completeBook={props.completeBook}
                    />
                  )
                );
              })
            : null}
          {props.books.length > 0 && sort === "read"
            ? props.books.map((item) => {
                return (
                  item.completed === true && (
                    <BookItem
                      key={item.id}
                      item={item}
                      removeBook={props.removeBook}
                      completeBook={props.completeBook}
                    />
                  )
                );
              })
            : null}
          {props.books.length > 0 && sort === "all"
            ? props.books.map((item) => {
                return (
                  <BookItem
                    key={item.id}
                    item={item}
                    removeBook={props.removeBook}
                    completeBook={props.completeBook}
                  />
                );
              })
            : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBooks);
