import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
static defaultProps = {
  categories : ['Web Design', 'Web Development', 'Mobile Development']
}
handleSubmit(e) {
  // console.log(this.refs.title.value);
  if(this.refs.title.value === ''){
    alert('Title is required');
}
  else {
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }},
function(){
  // console.log(this.state);
  this.props.addproject(this.state.newProject);
});
  }
  e.preventDefault();
}
  render() {
    let categoryOptions=this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
return (
      <div>
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
      <label>Title: </label>
      <br/><br/>
      <input type="text" ref="title" />  <br/>
      </div>
      <br/>
      <div>
<label> Category</label><br/><br/>
<select ref="category">
{categoryOptions}
</select><br/>
      </div>
      <br/>
      <input type="submit" value="Submit"/>
      </form>

      </div>
    );
  }
}
AddProject.propTypes = {
  categories :React.PropTypes.array,
  addproject:React.PropTypes.func
}
export default AddProject;
