import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/reducer";
import { ImBooks } from "react-icons/im";


const mapStateToProps = (state) => {
  //pokus o připojení k json serveru
// let a = [];
//   fetch('http://localhost:8000/books')
//       .then(response => response.json())
//       .then(json => {
//        a.push(...json);
//       });
//   a.push(...state)
//   console.log(a);
  return {
    books: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (obj) => dispatch(addBook(obj)),
  };
};

const Books = (props) => {

  const [book, setBook] = useState("");

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const add = () => {
    if (book === "") {
      alert("Input is Empty");
    } else {
      props.addBook({
        id: Math.floor(Math.random() * 1000),
        item: book,
        completed: false,
      });
      setBook("");
    }
  };

  return (
    <div className="addBook">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="inputBook"
        value={book}
      />
      <button
        className="add-btn"
        onClick={() => add()}
      >
        <ImBooks />
      </button>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Books);
