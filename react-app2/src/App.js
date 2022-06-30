import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'read', 
      selected_content_id:2,
      Subject : {title : '범죄도시2', sub : '배우들의 연기가 메소드급인 스트레스가 해소되는 영화'},
      welcome : {title:'줄거리', desc:'나쁜놈들 잡아야하는데 국경없다 통쾌하고 화끈한 범죄 소탕작전이 시작된다 '},
      contents:[
        {id:1,title:'개요', desc:"범죄/한국/106분"},
        {id:2,title:'개봉', desc:"2022,05,18"},
        {id:3,title:'출연진', desc:"마동석(마석도),손석구(강해상), 최귀화(전일만)"},
        {id:4,title:'명대사', desc:"마석도 대사 : 누가5야?"},
        {id:5,title:'평점', desc:"네티즌평점:9.45,평론가평점:6.56"},
        {id:6,title:'시리즈', desc:"범죄도시1, 개봉:2017.10.3.03"}
      ]
    }
  }
  render(){
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      let i = 0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
  return (
    <div>
      <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'})
        }.bind(this)}
      >
      </Subject> 
      <TOC data={this.state.contents}
          onChangePage={function(id){
          this.setState(
            {
              mode:'read',
              selected_content_id : Number(id)
            }
            );
          }.bind(this)}
        >
        </TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
 }
}
export default App;