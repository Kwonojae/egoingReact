import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import React, {Component} from 'react';

//props : 부모 컨포넌트가 자식 컴포넌트에게 내려주는값 (상태값,변수,이벤트,함수)
//state: 컴포넌트 자기자신이 선언하는 값
//컴포넌트를 만드는 코드  컴포넌트는 정리정돈 정도로 생각하자
//render보다 먼저 실행이되며 그 Component를 초기화시켜주고싶은 코드는
// constructor안에 super(props)를짜고 그안에코드를 작성한다 
//constructor함수가 있으면 먼저 실행되서 초기화를 담당한다

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[  //데이터가 여러개일땐 배열로 
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  //react 에서는 props에 따옴표로 묶어주면 문자열이 된다 자바스크립트 코드로 실행되게하려면{}사용해야됨
  //react에서는  props,state 값이 바뀌면 render(component)가 호출된다
  //render: 어떤 html을 그릴것인가
  //this는 그 컨포넌트 자신을 가리킨다
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render',this);
    return(
      <div className="App"> 
        {/* <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            //debugger;
            e.preventDefault();//태그의 기본적인 동작을 못하게하는 메소드
            this.setState({   //setState: state값이바뀌면 setState로 바꿔줘야됨
              mode:'welcome'  //<-경하고싶은값
            });  
            //bind 묶어준다 강제로 this를 주입하는 방법 
        }.bind(this)}>  
        {this.state.subject.title}</a></h1>
        {this.state.subject.sub}  
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}



export default App;
