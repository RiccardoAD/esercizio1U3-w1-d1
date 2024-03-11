import { Component } from 'react'
class ImageComponents extends Component{
    render() {
        return (
            <>
          <img className="Img" src={this.props.src} alt={this.props.alt} />
            </>

    //  <>
    //  {/* <img src="https://placedog.net/298/832?id=16" alt=""/>
    //  {this.props} */}
     
    //  </>



        )
      }
    }

    export default ImageComponents