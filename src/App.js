import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import React, {Component} from 'react';

class App extends Component {//컴포넌트를 만드는 코드  컴포넌트는 정리정돈 정도로 생각하자
  render() {
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC title="React" sub="For UI"></TOC>
        <Content title="wow" sub="WTF"></Content>
      </div>
    );
  }
}



export default App;
