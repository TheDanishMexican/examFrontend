import { Fade } from '@mui/material'
import '../styling/homePage.css'
import sports from '../assets/olympics.jpg'

export default function HomePage() {
    return (
        <Fade in={true} timeout={1000}>
            <div className="homepage-container">
                <h1>Home </h1>
                <p>
                    Welcome to the athletics page where you can see results,
                    participants and disciplines. Click on the tabs to see more
                    about each.
                </p>
                <img className="image-home" src={sports} />
            </div>
        </Fade>
    )
}
