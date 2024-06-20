import AccessibilityIcon from '@mui/icons-material/Accessibility'
import StadiumIcon from '@mui/icons-material/Stadium'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import '../styling/navbar.css'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

export default function NavBar() {
    return (
        <div className="navbar-container">
            <NavLink className="nav-button" to="/participants">
                <AccessibilityIcon />
                <p className="nav-button-description">Participants</p>
            </NavLink>

            <NavLink className="nav-button" to="/disciplines">
                <StadiumIcon />
                <p className="nav-button-description">Disciplines</p>
            </NavLink>

            <NavLink className="nav-button" to="/results">
                <WorkspacePremiumIcon />
                <p className="nav-button-description">Results</p>
            </NavLink>

            <NavLink className="nav-button" to="/homepage">
                <HomeIcon />
                <p className="nav-button-description">Home</p>
            </NavLink>
        </div>
    )
}
