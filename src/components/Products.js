import React from "react";
import { connect } from "react-redux";
import { addtoCart } from "../actions";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar:{book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.addtoCart(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

const mapActionstoProps = { addtoCart };

export default connect(mapStatetoProps, mapActionstoProps)(Products);
