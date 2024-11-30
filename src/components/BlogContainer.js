import ContentBox from './ContentBox.js'
import '../stylesheets/BlogContainer.css'

function BlogContainer(props) {
  return (
    <div className="main-content-box">
      { 
        props.data.map((item) =>(
          <div key={item.title}>
            <ContentBox 
              title={item.title} 
              content={item.short_desc}
              author={item.user_name}
            />
          </div>
        ))}
    </div>
)
}

export default BlogContainer
