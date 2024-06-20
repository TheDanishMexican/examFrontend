import AccessibilityIcon from '@mui/icons-material/Accessibility'
import StadiumIcon from '@mui/icons-material/Stadium'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import '../styling/navbar.css'

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="nav-button">
                <AccessibilityIcon />
                <p className="nav-button-description">Participants</p>
            </div>
            <div className="nav-button">
                <StadiumIcon />
                <p className="nav-button-description">Disciplines</p>
            </div>
            <div className="nav-button">
                <WorkspacePremiumIcon />
                <p className="nav-button-description">Results</p>
            </div>
        </div>
    )
}
