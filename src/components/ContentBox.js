import '../stylesheets/ContentBox.css';
import image from '../images/saturns_rings.webp'

function ContentBox(props) {

  return (
    <div className='main-box'>
      <div className='image-box'>
        <img src={image} alt='Hahahah' className='image'/>
      </div>
      <div className='title-box'>{props.title}</div>
      <div className='desc-box'>{props.content}</div>
      <div className='author-box'>{props.author}</div>
    </div>
  )
}

export default ContentBox
