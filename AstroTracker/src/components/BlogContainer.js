import ContentBox from './ContentBox.js'
import '../stylesheets/BlogContainer.css'

function BlogContainer(props) {
  return (
    <div className="main-content-box">
      { 
        props.data.map((item) =>(
          <div key={item.id}>
            <ContentBox 
              title={item.title} 
              content={item.desc}
              author={item.author}
            />
          </div>
        ))}
    </div>
)
}

export default BlogContainer
