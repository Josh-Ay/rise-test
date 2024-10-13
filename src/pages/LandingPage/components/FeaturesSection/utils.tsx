import investIllus from '../../../../assets/landing/invest-illus.svg'
import bestIllus from '../../../../assets/landing/best-illus.svg'
import goalsIllus from '../../../../assets/landing/goals-illus.svg'
import rmbIllus from '../../../../assets/landing/remember-illus.svg'

export const featuresList: {
    title: string;
    description: string;
    image: string;
    imageIsLeading: boolean;
}[] = [
    {
        title: 'Invest your money in dollars',
        description: 'By holding your investments in a stable\ncurrency, your money grows more over\ntime and retains its value better.',
        image: investIllus,
        imageIsLeading: false,
    },
    {
        title: "Choose what's best\nfor you",
        description: 'Unlike other platforms, Rise lets you pick between\nstocks, US real estate and fixed income, according to\nyour risk appetite. That way you can spread your risk and\ntap into different investments all in one place.',
        image: bestIllus,
        imageIsLeading: true,
    },
    {
        title: 'Set goals and reach them',
        description: 'You can invest towards a goal on Rise--retirement, higher\neducation, save for your home or travel budgets. Or create\na goal of your own and invest periodically to achieve them.',
        image: goalsIllus,
        imageIsLeading: false,
    },
    {
        title: 'We remember so you dont\nhave to',
        description: 'Our Auto-invest feature makes it easy to stay consistent,\neven when you forget. Set a funding amount, frequency\nand payment method and Rise will automatically fund\nyour investment, on schedule.',
        image: rmbIllus,
        imageIsLeading: true,
    },
]

export const smallFeaturesList: {
    title: string;
    description: string;
    image: string;
    imageIsLeading: boolean;
}[] = [
    {
        title: 'Superior Performance',
        description: 'Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. ',
        image: investIllus,
        imageIsLeading: false,
    },
    {
        title: "Personalization",
        description: "No two people are the same, and everyone's financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",
        image: bestIllus,
        imageIsLeading: true,
    },
    {
        title: 'Diversification',
        description: 'Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or',
        image: goalsIllus,
        imageIsLeading: false,
    },
]