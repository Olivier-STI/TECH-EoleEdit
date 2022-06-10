import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import UploadVideoRequest from '../Controllers/UploadVideoController'

interface IMyProps {

}

interface IMyState {
    Title : string,
    Description : string
    File : any
}

export class UploadForm extends Component<IMyProps, IMyState> {
    constructor (props : IMyProps) {
        super(props)
        this.state = {
            Title : '',
            Description : '',
            File : ''
        }
    }

    // Function to get the title
    handleTitleInput = (InputText : any) => {
        this.setState({Title : InputText.target.value})
    }

    // Function to get the description
    handleDescriptionInput = (InputText : any) => {
        this.setState({Description : InputText.target.value})
    }

    // Function to get the file
    handleFileInput = (InputFile : any) => {
        this.setState({File : Array.from(InputFile.target.files)})
    }

    // Function to submit the request
    handleSubmit = async (Title : string, Description : string, File : any) => {
        if (Title && Description && File) {
            await UploadVideoRequest(Title, Description, File)
        }
    }

    render(): React.ReactNode {
        return (
            <Card style={{width : '50%', height : '40%'}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter title " value={this.state.Title} onChange={this.handleTitleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter Description" value={this.state.Description} onChange={this.handleDescriptionInput}/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add yout video file</Form.Label>
                    <Form.Control type="file" onChange={this.handleFileInput} />
                </Form.Group>
                <Button variant="primary"  onClick={() => this.handleSubmit(this.state.Title, this.state.Description, this.state.File)}>
                    Submit
                </Button>
            </Form>
            </Card>
        )
    }

}