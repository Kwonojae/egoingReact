import React, { Component } from 'react';


class Subject extends Component {   
render() {  // 반드시 메소드가 있어야함 앞에 function이붙지만 클래스안에 서는 생략가능
    return (
    <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
    </header>
    ); 
    }
}

export default Subject;