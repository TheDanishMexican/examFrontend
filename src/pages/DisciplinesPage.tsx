import { Fade } from '@mui/material'
import '../styling/disciplinePage.css'
import disco from '../assets/discos.jjpg.jpg'
import running from '../assets/running.jpg'
import jumping from '../assets/jump.jpg'

export default function DisciplinesPage() {
    return (
        <Fade in={true} timeout={1000}>
            <div className="discipline-page-container">
                <h1>Disciplines</h1>
                <div className="disciplines-content">
                    <p>
                        On this tab you can read all about the various
                        disciplines and their history
                    </p>
                    <div className="discipline-info-container">
                        <img className="discipline-img" src={disco} alt="" />
                        <h3 className="info-header">Discos</h3>
                        <p>
                            Discos is a sport that originates from the ancient
                            greece and has roots all over the world.
                        </p>
                    </div>
                    <div className="discipline-info-container">
                        <img className="discipline-img" src={jumping} alt="" />
                        <h3 className="info-header">Jumping</h3>
                        <p>
                            Jumping is a sport that originates from the ancient
                            greece and has roots all over the world.
                        </p>
                    </div>
                    <div className="discipline-info-container">
                        <img className="discipline-img" src={running} alt="" />
                        <h3 className="info-header">Running</h3>
                        <p>
                            Running is a sport that originates from the ancient
                            greece and has roots all over the world.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
