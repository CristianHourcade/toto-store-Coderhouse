import { ButtonComponent } from '../ButtonComponent';
import './styles.scss';

export const CardComponent = ({ title, children, toto, }) => {
    return (
        <>
            <div className="card">
                {children}
                <h2>{title}</h2>
                <h1>{toto.name}</h1>
                <strong>{toto.price}</strong>
                <ButtonComponent text={"Agregar al carrito"} isActive={false} />
            </div>
        </>
    )
}