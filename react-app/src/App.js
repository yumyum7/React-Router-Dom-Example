
import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Subject:{title : 'WEB', sub : 'World Wid Web'},
      contents:[
        {id:1,title:'HTML', desc:"HTML is for imformation"},
        {id:2,title:'CSS', desc:"CSS is for designn"},
        {id:3,title:'JavaScript', desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
  return (
    <div>
      <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject> {/* <Subject />  */}
      <TOC data={this.state.contents}></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
 }
}

export default App;