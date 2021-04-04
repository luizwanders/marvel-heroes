import style from './index.module.scss'
import logo from '@/assets/logo.jpg'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Objective" />
                </Link>
            </div>

            <div className={style.credits}>
                <div className={style.name}>
                    <span className={style.dev}>Wanderson Silva</span>
                    <span className={style.test}>Teste de Front-end</span>
                </div>
                <div className={style.assign}>CB</div>
            </div>
        </div>
    )
}
