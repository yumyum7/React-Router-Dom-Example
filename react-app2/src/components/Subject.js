import React,{Component} from 'react';

class Subject extends Component{
    render(){
      console.log('Subject render');
      return(
        <header class='title'>
          <h1><a href='/' class='atitle' onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
  export default Subject;