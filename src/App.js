import React, { Component } from "react";
import './App.css';
import data from "./data";
import ViewImage from "./components/viewImage";
//import axios from "axios";


class Header extends Component {
  render(){
    return (
      <header>
        <h2>사진갤러리</h2>
      </header>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.max_id = 2;

    this.state = {
      properties: data.properties,
      property1: data.properties[0],
      property2: data.properties[1],
      property3: data.properties[2]
    }
    
    this.handleChange = this.handleChange.bind(this)
  }


/* Pagination */
prePagination = () => {
  const newIndex = this.max_id

  if (this.state.property1.index === 0) {
    this.setState({
      property1: this.state.properties[newIndex],
      property2: this.state.properties[this.state.property2.index-1],
      property3: this.state.properties[this.state.property3.index-1]
    })
  } else if (this.state.property2.index === 0) {
    this.setState({
      property1: this.state.properties[this.state.property1.index-1],
      property2: this.state.properties[newIndex],
      property3: this.state.properties[this.state.property3.index-1]})
  } else if (this.state.property3.index === 0) {
    this.setState({
      property1: this.state.properties[this.state.property1.index-1],
      property2: this.state.properties[this.state.property2.index-1],
      property3: this.state.properties[newIndex]})
  } else {
    this.setState({
      property1: this.state.properties[this.state.property1.index-1],
      property2: this.state.properties[this.state.property2.index-1],
      property3: this.state.properties[this.state.property3.index-1]
    })
  }
  console.log("propertiex.length : " + this.max_id);
  console.log(this.state.property1.index);
  console.log(this.state.property2.index);
  console.log(this.state.property3.index);
}

  nextPagination = () => {
    const newIndex = 0
    if (this.state.property1.index === this.max_id) {
      this.setState({
        property1: this.state.properties[newIndex],
        property2: this.state.properties[this.state.property2.index+1],
        property3: this.state.properties[this.state.property3.index+1]
      })
    } else if (this.state.property2.index === this.max_id) {
      this.setState({
        property1: this.state.properties[this.state.property1.index+1],
        property2: this.state.properties[newIndex],
        property3: this.state.properties[this.state.property3.index+1]
      })
    } else if (this.state.property3.index === this.max_id) {
      this.setState({
        property1: this.state.properties[this.state.property1.index+1],
        property2: this.state.properties[this.state.property2.index+1],
        property3: this.state.properties[newIndex]
      })
    } else {
      this.setState({
        property1: this.state.properties[this.state.property1.index+1],
        property2: this.state.properties[this.state.property2.index+1],
        property3: this.state.properties[this.state.property3.index+1]
      })
    }
    console.log("propertiex.length : " + this.max_id);
    console.log(this.state.property1.index);
    console.log(this.state.property2.index);
    console.log(this.state.property3.index);
  }


  handleChange(event) {
    this.max_id=this.max_id+1;
    console.log("max_id : " + this.max_id);
    var _properties = this.state.properties.concat(
      {index:this.max_id, picture:URL.createObjectURL(event.target.files[0])}
    )
    console.log("properties : " + this.state.properties);
    console.log("_properties : " + _properties);

    this.setState({
      properties:_properties
    });
    console.log(_properties);
  }

  render() {
    const {property1, property2, property3} = this.state;

    return (
      <div>
        <Header></Header>

        <div className="pagination">
          <button className="previous"
            onClick={()=>this.prePagination()}>
              ❮
          </button>

          <button className="next"
            onClick={()=>this.nextPagination()}>
              ❯
          </button>
        </div>

        <div className="viewImage">
          <img src={property1.picture} alt="picture_1" className="img1"/>
          <img src={property2.picture} alt="picture_2" className="img2"/>
          <img src={property3.picture} alt="picture_3" className="img3"/>
        </div>

        <div className="FileInput">
          <label htmlFor="ex_file">업로드</label>
          <input
          type="file"
          id="ex_file"
          accept="image/jpeg, image/png"
          onChange={this.handleChange}
          ref={fileInput => this.fileInput = fileInput}
          />
        </div>

      </div>
    );
  }
}

export default App;