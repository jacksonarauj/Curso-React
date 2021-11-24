import './style.css'
import{Postcard} from '../PostCard/index.jsx';

export const Posts=({posts})=>(
    <div className="posts">
    {posts.map(posts=>(
      //LEMBRAR DA KEY QUANDO ESTIVER USANDO O MAP 
      <Postcard
      key={posts.id}
      post={posts}

       //post={post.photosJson[index]}
      /*title={post.title}
      body={post.body}
      id={post.id}
      cover={post.cover}*/
      
      //post={posts}
      />
     )) 
    }
  </div>
)