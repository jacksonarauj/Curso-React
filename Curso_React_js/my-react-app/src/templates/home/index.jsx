/* eslint-disable react/jsx-no-undef */

import './style.css';

import {Component} from 'react'; 

import {Posts} from '../../components/Posts_2';
import  {loadPosts} from '../../utils/load_Posts.js';
import{Button} from '../../components/button';
import{TextInput} from '../../components/TextInput';


export class Home extends Component{
  
    state={
      counter:0,
       posts:[] ,
       allPosts:[],
       page:0,
       postsPerPage:5,
       searchValue:''
      };

  async componentDidMount(){
      await this.loadPosts();
    } 

  loadPosts=async()=>{
      const{page,postsPerPage}= this.state; 
      const postAndPhotos= await loadPosts();
      this.setState({
        posts:postAndPhotos.slice(page, postsPerPage ),
        allPosts:postAndPhotos
      });
    }

  loadMorePosts=()=>{
      const{
        page,
        postsPerPage,
        allPosts,
        posts
      }=this.state
      const nextPage=page+postsPerPage;
      const nextPosts= allPosts.slice(nextPage,nextPage+
        postsPerPage);
        posts.push(...nextPosts);
        this.setState({posts,page:nextPage});
    }
  
  handleChange=(event)=>{
      const {value}=event.target;
      this.setState({searchValue:value});
        console.log(event);
    }
  render(){
      
      const{posts,page,postsPerPage,allPosts,searchValue}=this.state;
      const noMorePosts=page+postsPerPage>=allPosts.length;
      const filteredPosts = !!searchValue ? allPosts.filter(post=>{
        return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
        );
      }):posts;
        return (
          <section className="container">
            <div className="search_container">
              {searchValue && (
               <>
                  <h1>Search Value:{searchValue}</h1>
               </>
              )}
              <TextInput 
                searchValue={searchValue} 
                handleChange={this.handleChange}/>
            </div>
        
          {filteredPosts.length>0 &&(
            <Posts   
               posts={filteredPosts}
            />
          ) }
          {filteredPosts.length===0 &&(
             <p>Não existem Posts =( </p>
          ) }
          
          <div className="button-container">
            {!searchValue && (
               <Button
                 text='Botao'
                 quandoClica={this.loadMorePosts}
                 disabled={noMorePosts}
               />
            )}
         
          </div>
        </section>
      );

   }
 }


