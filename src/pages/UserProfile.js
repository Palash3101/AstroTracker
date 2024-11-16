import BlogContainer from '../components/BlogContainer';
//import Footer from '../components/Footer';
import Header from '../components/Header';
import '../stylesheets/UserProfile.css';

function UserProfile() {

  const blog_data = [
    {
      id: '1',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id: '2',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id: '3',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    }
  ];

  const personal_data = {
    name: 'Name',
    username: '@username',
    other: 'Kuch bhi',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin massa lacus, eu egestas dolor tristique at. Nunc vestibulum quis ligula a fermentum. Sed aliquet nec leo at commodo. Nam non rutrum nibh, in finibus neque. Vestibulum mattis nunc dolor, et venenatis elit porta vel. Morbi aliquet blandit tincidunt.'
  };

  return (
    <main>
      <Header />
      <div className='UserProfile'>
        <div className='personal-data-box'>
          <div className='profile-image'>
            <img src={require('../images/image3.jpg')} alt="Profile" />
          </div>

          <div className='personal-data'>
            <div className='name'>{personal_data.name}</div>
            <div className='username'>{personal_data.username}</div>
            <div className='other'>{personal_data.other}</div>
          </div>

          <div className='edit-profile'>
            <button className='edit-profile-button'>Edit Profile</button>
          </div>
        </div>

        <div className='about-me-box'>
          <div className='subheading'>About Me</div>
          <div className='about-me-data'>{personal_data.about_me}</div>
        </div>

        <div className='pinned-blog-box'>
          <div className='pinned_subheading'>Pinned Blogs</div>
          <BlogContainer data={blog_data} />
        </div>

        <div className='action-buttons'>
          <button className='action-button'>Write New Blog</button>
          <button className='action-button'>My Blogs</button>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
