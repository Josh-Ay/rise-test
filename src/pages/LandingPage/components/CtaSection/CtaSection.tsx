import styles from './styles.module.css'
import phone from '../../../../assets/landing/Phone.svg'
import buildWealth from '../../../../assets/landing/build-wealth.jpeg'
import CustomButton from '../../../../components/CustomButton/CustomButton'
import { IoIosArrowRoundForward } from 'react-icons/io'


const CtaSection = () => {
    return <section className={styles.cta__Section}>
        <div className={styles.imgs__Wrap}>
            <img 
                src={phone}
                alt='phone'
                className={styles.phone__Img}
            />

            <div
                className={styles.build__Wealth__Img}
            >
                <img 
                    src={buildWealth}
                    alt='build wealth'
                />

                <div className={styles.build__Wealth__Info}>
                    <h3>Build Wealth</h3>

                    <p>
                        Invest for long-term goals like retirement with this plan. It's your financial freedom partner.
                    </p>

                    <p className={styles.action__Btn}>
                        <span>Start investing</span>
                        <IoIosArrowRoundForward size={'1rem'} />
                    </p>
                </div>
            </div>
        </div>

        <section className={styles.cta__Content}>
            <p className={styles.content__Title}>The Rise App</p>
            <h4 className={styles.cta__Main}>Save for your <span className={styles.purple__Highlight}>future</span></h4>
            <p className={styles.cta__Desc}>
                With Rise, you achieve your financial goals faster. Save<br />for school, your home, vacations, your children's<br />future and more.
            </p>

            <CustomButton 
                title='Start Saving'
                backgroundColor='#07969E'
                color='#fff'
                padding='1.2rem 2rem'
                borderRadius='5px'
                width='max-content'
                fontSize='1.125rem'
                margin='1rem 0 0'
            />
        </section>
    </section>
}

export default CtaSection