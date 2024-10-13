export const navLinks: {
    title: string;
    path: string;
    hasDropdown?: boolean;
    dropdownMenu?: [];
}[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Products',
        path: '/products',
        hasDropdown: true,
        dropdownMenu: [],
    },
    {
        title: 'Investment Club',
        path: '/investment-club',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'About us',
        path: '/about-us',
    },
    {
        title: 'FAQs',
        path: '/faq',
    },
]