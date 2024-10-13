import React from 'react'
import logoImg from '../../assets/logo.svg'
import styles from './styles.module.css'
import { navLinks } from './utils'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
    const { pathname } = useLocation();
    
    return <nav className={styles.wrapper}>
        <img 
            src={logoImg}
            alt='rise logo'
            className={styles.logo__Img}
        />

        <RxHamburgerMenu 
            className={styles.small__Nav__Btn} 
            size={'1.5rem'}
        />

        <ul className={styles.nav__Links__Wrap}>
            {
                React.Children.toArray(navLinks.map(navLink => {
                    return <li
                        className={`${styles.nav__Link} ${pathname === navLink.path ? styles.active : ''}`}
                    >
                        <Link 
                            to={navLink.path}
                        >
                            <span>{navLink.title}</span>
                            {
                                navLink.hasDropdown === true ?
                                    <IoIosArrowRoundDown />
                                :
                                <></>
                            }

                            {
                                pathname === navLink.path ? 
                                    <div className={styles.active__Indicator}></div>
                                :
                                <></>
                            }
                        </Link>
                    </li>
                }))
            }
        </ul>
    </nav>
}

export default Navbar