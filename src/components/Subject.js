import React, { Component } from 'react';


class Subject extends Component {   
render() {  // 반드시 메소드가 있어야함 앞에 function이붙지만 클래스안에 서는 생략가능
    console.log('subject render');
    return (
    <header>
        <h1><a href="/">{this.props.title}</a></h1>
        {this.props.sub}
    </header>
    ); 
    }
}

export default Subject;