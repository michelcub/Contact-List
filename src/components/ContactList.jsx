const ContactList = ({children}) => {
return (
    <div className="w-100 h-100">
    <ul className="list-group">{children}</ul>
</div>
)
};

export default ContactList;