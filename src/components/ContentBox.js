import '../stylesheets/ContentBox.css';
import image from '../images/BlackHole.jpeg'

function ContentBox() {

  return (
    <div className='main-box'>
      <div className='image-box'>
        <img src={image} alt='Hahahah' className='image'/>
      </div>
      <div className='title-box'>Saturn's Rings</div>
      <div className='desc-box'> How long will Saturn's Rings
        last before they disappear?
      </div>
      <div className='author-box'> Author</div>
    </div>
  )
}

export default ContentBox
