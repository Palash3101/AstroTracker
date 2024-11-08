import '../stylesheets/Content.css'
import BlogContainer from './BlogContainer.js';

function Content() {

  const data = [
    {
      id:'1',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'2',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'3',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'4',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'5',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'6',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    }
  ];

  return (
    <div className='blog-box'>
      <BlogContainer data={data} />
    </div>
  )
}

export default Content
