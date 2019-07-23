import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';


class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
      }



    onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
        
        //여기 axios
    }


    render(){
        return (
          <div className="App">
              <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                              withPreview={true} />
          </div>
        );

  }

}

export default Upload;
