export const ProductInfo = ({ product }) => {
    const {name, price, description, rating} = product || {};
    return product ? (
        <>
            <h3>Name: {name}</h3>
            <p>Name: {price}</p>
            <p>Name: {description}</p>
            <p>Name: {rating}</p>
        </>
    ): <p>Loading...</p>;
};