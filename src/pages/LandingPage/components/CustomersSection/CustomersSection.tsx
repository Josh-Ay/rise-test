import armClientImg from '../../../../assets/landing/arm-client.svg'
import westernUnionClientImg from '../../../../assets/landing/wu-client.svg'
import techstarClientImg from '../../../../assets/landing/techstar-client.svg'
import vuClientImg from '../../../../assets/landing/vu-client.svg'
import styles from './styles.module.css'


const CustomersSection = () => {
    return <>
        <p className={styles.intro}>We are supported by</p>
        
        <section className={styles.customers__Wrap}>
            <div className={styles.img__mask}>
                <img 
                    src={armClientImg}
                    alt='customer logo'
                    className={styles.cust__img}
                />
            </div>

            <div className={styles.img__mask}>
                <img 
                    src={westernUnionClientImg}
                    alt='customer logo'
                    className={styles.cust__img}
                />
            </div>

            <div className={styles.img__mask}>
                <img 
                    src={techstarClientImg}
                    alt='customer logo'
                    className={styles.cust__img}
                />
            </div>

            <div className={styles.img__mask}>
                <img 
                    src={vuClientImg}
                    alt='customer logo'
                    className={styles.cust__img}
                />
            </div>
        </section>
    </>
}

export default CustomersSection