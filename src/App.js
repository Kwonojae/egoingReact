import './App.css';
import React, {Component} from 'react';

class Subject extends Component {   
  render() {  // 반드시 메소드가 있어야함 앞에 function이붙지만 클래스안에 서는 생략가능
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
     ); 
   }
}

class TOC extends Component {
  render() {
    return(
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render(){
    return(
        <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>
    );
  }
}

class App extends Component {//컴포넌트를 만드는 코드  컴포넌트는 정리정돈 정도로 생각하자
  render() {
    return(
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}



export default App;
