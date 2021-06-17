import './styles.scss';

export const CardComponent = ({ title, price, img }) => {
    return (
        <>
            <div className="card col-md-4">
                <img src={img}/>
                <h2>{title}</h2>
                <strong>{price}</strong>
            </div>
        </>
    )
}