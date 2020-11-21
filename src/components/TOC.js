import React, {Component} from 'react';

class TOC extends Component {
render() {
    console.log('Toc render');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {// 여러개의 엘리먼트를 자동으로 생성하면 key={data[i].id 필요함
    lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;

    }
    return(
    <nav>
            <ul>
                {lists}
            </ul>
    </nav>
    );
}
}

export default TOC;     
//TOc를 가져다 사용할수있게됨  외부에서 사용할수 있게 허용할것인가 코드

