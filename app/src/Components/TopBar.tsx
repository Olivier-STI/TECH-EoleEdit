import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import ReactIcon from '../Assets/1.png'

const TopBar = () => {
    return (
        <Navbar bg="dark">
            <div style={{marginRight : '1%'}}>
                <img alt='React icon' src={ReactIcon} height={'50px'} width={'60px'}/>
            </div>
            <text style={{color : 'white', fontSize : '30px'}} >My Video App</text>
        </Navbar>
    )
}

export default TopBar