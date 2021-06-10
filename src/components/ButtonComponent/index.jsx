import './styles.scss';

export const NavbarComponent = ({text, isActive}) => {
    return (
        <nav style={{backgroundColor: isActive?'blue':'red'}}>
            {/* <CardWidget/> */}
        </nav>
    )
}