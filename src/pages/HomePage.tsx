import { Fade } from '@mui/material'

export default function HomePage() {
    return (
        <Fade in={true} timeout={1000}>
            <div>
                <h1>Home Page</h1>
                <p>
                    Welcome to the athletics page where you can see results,
                    participants and disciplines. Click on the tabs to see more
                    about each.
                </p>
            </div>
        </Fade>
    )
}
