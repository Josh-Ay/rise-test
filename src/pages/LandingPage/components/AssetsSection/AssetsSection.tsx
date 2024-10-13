import React from 'react';
import styles from './styles.module.css'
import { assetClasses } from './utils';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { IoIosArrowRoundForward } from 'react-icons/io';


const AssetsSection = () => {
    return <>
        <section className={styles.assets__Section}>
            <section className={styles.title__Wrap}>
                <h2>Asset Classes</h2>
                <p>It's your money, choose where you invest it</p>
            </section>

            <section className={styles.asset__List__Wrap}>
                {
                    React.Children.toArray(assetClasses.map(asset => {
                        return <section className={styles.asset__Detail}>
                            <section
                                className={styles.asset__banner}
                                style={{
                                    backgroundColor: asset.backgroundColor,
                                }}
                            >
                                <img 
                                    src={asset.imageSrc}
                                    alt='asset pic'
                                    className={styles.asset__Img}
                                />
                            </section>
                            
                            <section className={styles.asset__Info}>
                                <h3>{asset.title}</h3>

                                <p className={styles.asset__Desc}>
                                    <span>{asset.description}</span>
                                    <span className={styles.asset__Risk__Info}>
                                        <span><span className={styles.grey_}>Historical returns:</span> {asset.returnsPerAnnum}% per annum </span>
                                        <span><span className={styles.grey_}>Risk Level:</span> {asset.riskLevel} </span>
                                    </span>
                                </p>

                                <CustomButton 
                                    title={`Learn how ${asset.title.toLocaleLowerCase()} works`}
                                    icon={IoIosArrowRoundForward}
                                    isLeadingIcon={false}
                                    fontSize='1.125rem'
                                    color='#07969E'
                                    margin='auto 0 0 0'
                                    className={styles.learn__Btn}
                                />
                            </section>
                        </section>
                    }))
                }
            </section>
        </section>
    </>
}

export default AssetsSection;