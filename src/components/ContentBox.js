import '../stylesheets/ContentBox.css';
import image from '../images/BlackHole.jpeg'

function ContentBox() {

  return (
    <div className='main-box'>
      <div className='image-box'>
        <img src={image} alt='Hahahah' className='image'/>
      </div>
      <div className='title-box'>Title</div>
      <div className='desc-box'> ajwadiad widb
        wadi wdhihdawhd iawhd iuawhidu ahwid 
      </div>
      <div className='author-box'> Author</div>
    </div>
  )
}

export default ContentBox
