import './styles.scss';

export const NavbarComponent = ({ text, isActive }) => {
    return (
        <nav>
            <h1>{text}</h1>
        </nav>
    )
}