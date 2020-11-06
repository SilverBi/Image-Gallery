import React, { Component } from "react";
import './App.css';
import ImageData from "./imageData";

class App extends Component {
  constructor(props){
    super(props);

    this.max_id = 2;

    this.state = {
      images: ImageData.images,
      firstImage: ImageData.images[0],
      secondImage: ImageData.images[1],
      thirdImage: ImageData.images[2],
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

/* Pagination */
prePagination = () => {
  const endId = this.max_id
  const startId = 0;
  const copyPrevArray = [];

  copyPrevArray[endId] = this.state.images[startId];

  for (var i=0; i<endId; i++) {
    copyPrevArray[i] = this.state.images[i+1];
  }
  
  this.setState({
    images: copyPrevArray,
    firstImage: copyPrevArray[0],
    secondImage: copyPrevArray[1],
    thirdImage: copyPrevArray[2]
  })
}

nextPagination = () => {
    const endId = this.max_id
    const copyNextArray = [];
  
    copyNextArray[0] = this.state.images[endId];
  
    for (var i=1; i<=endId; i++) {
      copyNextArray[i] = this.state.images[i-1];
    }
  
    this.setState({
      images: copyNextArray,
      firstImage: copyNextArray[0],
      secondImage: copyNextArray[1],
      thirdImage: copyNextArray[2]
    })
  }

  handleChange(event) {
    this.max_id=this.max_id+1;

    var _images = this.state.images.concat(
      {index:this.max_id, picture:URL.createObjectURL(event.target.files[0]), name:event.target.files[0].name}
    )
    this.setState({
      images:_images
    });
  }

  render() {
    const {firstImage, secondImage, thirdImage} = this.state;

    return (
      <div>
        <div className="header">
          <h2>사진갤러리</h2>
        </div>

        <div className="pagination">
          <button className="previous"
            onClick={()=>this.prePagination()}>
              {"<"}
          </button>

          <button className="next"
            onClick={()=>this.nextPagination()}>
              {">"}
          </button>
        </div>

        <div className="viewImage">
          <img src={firstImage.picture} alt="picture_1" className="img1"/>
          <img src={secondImage.picture} alt="picture_2" className="img2"/>
          <img src={thirdImage.picture} alt="picture_3" className="img3"/>
        </div>

        <div className="fileName">
          <div className="name1">{firstImage.name}</div>
          <div className="name2">{secondImage.name}</div>
          <div className="name3">{thirdImage.name}</div>
        </div>

        <div className="FileInput">
          <div className="inputBox">
            <label htmlFor="ex_file">업로드
              </label>
          </div>
          <input
          type="file"
          id="ex_file"
          name="excelFile"
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