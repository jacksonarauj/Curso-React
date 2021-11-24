

/*export const Postcard=({title,cover,body,id})=>(
            <div className="post">
                <img src={cover} alt={title}/>
                <div key={id} className="posts_content">
                  <p>{title}</p>
                    <p>{body}</p>
                    
                </div>
            </div>
)*/

//                    ({post})é a mesma coisa
import './style.css';
export const Postcard=(props)=>{

  const posta =props.post;
  //const{post}=props
    console.log(posta)
   return(
         <div className="post">
                <img src={posta.cover} alt={posta.title}/>
                <div  className="posts_content">
                  <p>{posta.title}{posta.id}</p>
                    <p>{posta.body}</p>
                    
                </div>
           </div>
         
   )
    
} 