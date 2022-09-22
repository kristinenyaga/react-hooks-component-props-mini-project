import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";


console.log(blogData);




function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList />
     

    </div>



  //    <div className="App">
  //    <Header nameOfBlog="Overreacted"/>
  //    <About image="" AboutText="Personal blog by Dan Abramov.
  //    I can explain with words and code"/>
  //    <Article title=""
  //    date=""
  //    preview=""/>

     
  //  </div>
  );
}

export default App;
