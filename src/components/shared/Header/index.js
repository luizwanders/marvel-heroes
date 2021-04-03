import style from './index.module.scss'
import logo from '@/assets/logo.jpg'

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.logoContainer}>
                <img src={logo} alt="Objective" />
            </div>

            <div className={style.credits}>
                <div className={style.name}>
                    Wanderson Silva <span>Teste de Front-end</span>
                </div>
                <div className={style.assign}>CB</div>
            </div>
        </div>
    )
}
