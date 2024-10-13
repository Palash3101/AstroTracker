import '../stylesheets/Content.css'
import ContentBox from './ContentBox.js'

function Content() {

  return (
    <div className='content-box'>
      <div className="main-content">
        <div><ContentBox/></div>
        <div><ContentBox/></div>
        <div><ContentBox/></div>
        <div><ContentBox/></div>
      </div>
    </div>
  )
}

export default Content
