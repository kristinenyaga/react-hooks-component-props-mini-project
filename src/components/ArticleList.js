import blogData from "../data/blog";
import Article from "./Article"
export default function ArticleList(){



const blogPost=blogData.posts.map(post =>{ 
return (
<Article key={post.id}title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>

)})


  return (
    <main>
      {blogPost}
    </main>
  )
}