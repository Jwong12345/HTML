import "./Home.css"
import { TextField } from "@material-ui/core"
const Home = () => {
    return (
        <div className="content">
            <div className='settings'>
                <span style={{ fontSize: 30}}>Quiz Settings</span>
                <div className="settings_select">
                    <TextField label='Enter Name' variant="outlined" style={{marginBottom: 25}}></TextField>
                    <TextField select label="Select Category" variant="outlined" style={{marginBottom: 30}}></TextField>
                    
                </div>
            </div>
            <img className='banner' src="/triviaquiz.jpg" alt="img"></img>
        </div>
    )
}
export default Home