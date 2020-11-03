import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

export default class pagination extends Component {
    render(){

        return(
            
            <div className="Pagination">
                <nav className="Previous">
                    <a href="#">❮</a>
                </nav>
        
                <nav className="Next">
                    <a href="#">❯</a>
                </nav>
            </div>
        );
    }
}