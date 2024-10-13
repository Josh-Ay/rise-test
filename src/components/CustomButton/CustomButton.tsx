import { IconType } from 'react-icons';
import styles from './styles.module.css'

const CustomButton = ({
    title='',
    subtitle,
    subtitleFontWeight,
    padding,
    backgroundColor,
    color,
    gap,
    borderRadius,
    icon,
    iconSize,
    fontSize,
    isLeadingIcon=true,
    margin,
    width,
    titleClassName,
    className,
}: {
    title?: string;
    subtitle?: string;
    subtitleFontWeight?: string;
    padding?: string;
    backgroundColor?: string;
    color?: string;
    gap?: string;
    borderRadius?: string;
    icon?: IconType;
    iconSize?: string;
    fontSize?: string;
    isLeadingIcon?: boolean;
    margin?: string;
    width?: string;
    titleClassName?: string;
    className?: string;
}) => {
    const Icon = icon;

    return <>
        <button
            className={`${styles.btn} ${className ?? ''}`}
            style={{
                padding,
                backgroundColor,
                gap,
                color,
                borderRadius,
                fontSize,
                margin,
                width,
            }}
        >
            {
                Icon && isLeadingIcon === true ?
                    <Icon 
                        size={iconSize}
                    />
                :
                <></>
            }

            <span className={styles.btn__Content}>
                <span className={titleClassName}>{title}</span>
                {
                    subtitle ?
                        <span
                            style={{
                                fontWeight: subtitleFontWeight,
                            }}
                        >
                            {subtitle}
                        </span>
                    :
                    <></>
                }
            </span>

            {
                Icon && isLeadingIcon !== true ?
                    <Icon 
                        size={iconSize}
                    />
                :
                <></>
            }
        </button>
    </>
}

export default CustomButton