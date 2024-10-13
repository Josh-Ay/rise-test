import { GoArrowUpRight } from 'react-icons/go'
import logo from '../../assets/logo-black.svg'
import styles from './styles.module.css'


const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.footer__Content}>
            <img 
                className={styles.logo}
                src={logo}
                alt='logo'
            />

            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Contact Info</li>
                <li>Press</li>
                <li>Rise Impact</li>
            </ul>
        </div>
        
        <div className={styles.footer__Content}>
            <p>Explore</p>
            <ul>
                <li>Investment Club <GoArrowUpRight /></li>
                <li>Blog <GoArrowUpRight /></li>
            </ul>
        </div>

        
        <div className={styles.footer__Content}>
            <p>Products</p>
            <ul>
                <li>Rise App</li>
                <li>Wallets</li>
                <li>Asset Classes</li>
            </ul>
        </div>

        
        <div className={styles.footer__Content}>
            <p>Contact Us</p>
            <ul>
                <li>0814 714 7405 <GoArrowUpRight /></li>
                <li>hello@rise.capital <GoArrowUpRight /></li>
                <li>Newsletter <GoArrowUpRight /></li>
                <li>Instagram <GoArrowUpRight /></li>
                <li>Twitter <GoArrowUpRight /></li>
            </ul>
        </div>
    </footer>
}

export default Footer