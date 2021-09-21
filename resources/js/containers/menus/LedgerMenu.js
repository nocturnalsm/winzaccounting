import TopMenu from './TopMenu';

const LedgerMenu = () => {

    const items = [
        {
            href: "/transaction",
            caption: "General Transaction",
        },
        {
            href: "/ledger",
            caption: "Ledger"
        },
        {
            isDivider: true
        },
        {
            href: "/income-journal",
            caption: "Income Journal"
        },
        {
            href: "/expense-journal",
            caption: "Expense Journal"
        }        
    ]
    
    return (
        <TopMenu items={items} title="Ledger" />
    )

}

export default LedgerMenu
