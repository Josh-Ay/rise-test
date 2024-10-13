import stockImg from '../../../../assets/landing/stocks-icon.svg'
import estateImg from '../../../../assets/landing/real-estate-icon.svg'
import fixedImg from '../../../../assets/landing/fixed-income-icon.svg'

export const assetClasses : {
    title: string;
    description: string;
    returnsPerAnnum: number;
    riskLevel: string;
    imageSrc: string;
    backgroundColor: string;
}[] = [
    {
        title: 'Stocks',
        description: 'We help you invest and manage your\nmoney by investing in our portfolio of 30\nhigh-growth stocks across the US market\nwith our equity portfolio of power stocks.',
        returnsPerAnnum: 14,
        riskLevel: 'medium',
        imageSrc: stockImg,
        backgroundColor: '#FFF4F0',
    },
    {
        title: 'Real Estate',
        description: 'Our Real Estate plan is the sweet\nmiddle. Best for those who want a\nbalance of good returns and medium\nrisk. This plan invests in rented\nbuildings in the US.',
        returnsPerAnnum: 14,
        riskLevel: 'medium',
        imageSrc: estateImg,
        backgroundColor: '#F6F2FF',
    },
    {
        title: 'Fixed Income',
        description: 'A low-risk asset perfect for anyone\nwho wants to protect their money in a\nsecure, appreciating currency, i.e. the\ndollar. For people who want to protect\ntheir hard-earned money from\ninflation while earning steady returns.',
        returnsPerAnnum: 14,
        riskLevel: 'medium',
        imageSrc: fixedImg,
        backgroundColor: '#ECFEFE',
    }
]