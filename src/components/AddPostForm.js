import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPostForm extends Component {
  state = {
    title: '',
    content: '',
    author: '',
    imgURL: ''
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.toggleForm()
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input 
                type="text" 
                name="title" 
                id="title-field" 
                onChange={e => this.setState({ title: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input 
                type="text" 
                name="body" 
                id="body-field" 
                onChange={e => this.setState({ imgURL: e.target.value })} 
                />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddPostForm
