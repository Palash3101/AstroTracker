import ContentBox from './ContentBox.js'
import '../stylesheets/BlogContainer.css'

function BlogContainer(props) {
  return (
    <div className="main-content-box">
      { 
        props.data.map((item) =>(
          <div key={item.blog_id}>
            <ContentBox 
              title={item.title} 
              content={item.short_desc}
              author={item.author_id}
            />
          </div>
        ))}
    </div>
)
}

export default BlogContainer
