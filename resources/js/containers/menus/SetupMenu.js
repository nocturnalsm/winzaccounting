import TopMenu from './TopMenu';

const SetupMenu = () => {

    const items = [
        {
            href: "/currencies",
            caption: "Currencies"
        },
        {
            href: "/currency-rates",
            caption: "Currency Rates"
        },
        {
            isDivider: true
        },
        {
            href: '/accounts',
            caption: 'Chart of Accounts'
        },
        {
            href: '/banks',
            caption: 'Banks'
        },
        {
            href: '/bank-accounts',
            caption: 'Bank Accounts'
        },
        {
            href: "/tax-codes",
            caption: "Tax Codes"
        },
        {
            isDivider: true
        },
        {
            href: '/units',
            caption: 'Units'
        },
        {
            href: '/product-categories',
            caption: 'Product Categories'
        },
        {
            href: '/products',
            caption: 'Products'
        },
        {
            href: "/warehouses",
            caption: "Warehouses"
        },

    ]

    return (
        <TopMenu items={items} title="Setup" />
    )

}

export default SetupMenu
