import React from "react";
import Results from "./Results"

function Searchbar(props){
    return(
        <div>
            <div class="jumbotron-fluid">
                <div className="container">
                    <h3 className="display-4 d-flex justify-content-center">Search your Favorite Books</h3>
                    <hr />
                </div>
            </div>
            <form className="search container">
                <div className="form-group row">
                    <input className="col-sm-10 form-control" 
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="book"
                        list="books"
                        type="text"
                        placeholder="Search for your favorite books"
                        id="book"
                    />
                    
                    {/* <datalist id="books">
                        {props.books.map(book => (
                            <option value={book} key={book} />
                         ))}
                    </datalist> */}
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success col-sm-2">Search</button>
                    
                </div>
            </form>
            <Results />
        </div>
    )
}

export default Searchbar;