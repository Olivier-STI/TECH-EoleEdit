import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import UploadVideoRequest from '../Controllers/UploadVideoController'

interface IMyProps {
}

interface IMyState {
    Title : string,
    Description : string
    File : any
    UploadedState : boolean
}

export class UploadForm extends Component<IMyProps, IMyState> {
    constructor (props : IMyProps) {
        super(props)
        this.state = {
            Title : '',
            Description : '',
            File : '',
            UploadedState : false
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
            if(File[0].type === "video/quicktime" ||File[0].type  === "video/mp4") {
                this.setState({UploadedState : true})
                await UploadVideoRequest(Title, Description, File, (result : boolean) => { 
                    if (result === true) {
                        window.location.reload();
                        this.setState({UploadedState : false})
                    }
                })
            } else {
                alert('Error, only accept .mov or .mp4')
            }
  
        } else {
            alert('Please fill all the form before submit.')
        }
    }


    render(): React.ReactNode {
        return (
            <Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width : '50%', height:'500px'}}>
                <div style={{width : '50%', height : '100%'}}>
            <Form style={{height : '60%' }}>
                <br/>
                <br/>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control  placeholder="Enter title " value={this.state.Title} onChange={this.handleTitleInput}/>
                </Form.Group>
                <br/>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter Description" value={this.state.Description} onChange={this.handleDescriptionInput}/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add yout video file</Form.Label>
                    <Form.Control accept="video/mp4" type="file" onChange={this.handleFileInput} />
                </Form.Group>
                <br/>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {this.state.UploadedState 
                    ? <Spinner animation="border" /> 
                    : <Button variant="primary" style={{backgroundColor : 'black', border :'none',}}  onClick={() => this.handleSubmit(this.state.Title, this.state.Description, this.state.File)}>
                        Submit
                    </Button>
                    }
                </div>
            </Form>
            </div>
            </Card>
        )
    }

}