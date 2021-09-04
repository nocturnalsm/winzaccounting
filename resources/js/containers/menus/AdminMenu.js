import TopMenu from './TopMenu';

const AdminMenu = () => {

    const items = [
        {
            href: "/companies",
            caption: "Companies",
        },
        {
            isDivider: true
        },
        {
            href: "/users",
            caption: "Users"
        },
        {
            href: "/permissions",
            caption: "Permissions"
        },
        {
            href: "/roles",
            caption: "Roles"
        }        
    ]
    
    return (
        <TopMenu items={items} title="Admin" />
    )

}

export default AdminMenu
