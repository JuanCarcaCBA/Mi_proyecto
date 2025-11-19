import styles from './Card.module.css';

function Card({ productData }) {
if (!productData) {
    return null;
  }
  
  const { title, price } = productData;

  return (
    <div className={`card shadow-sm ${styles.customCard}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-success">${price}</p>
        <button type="button" className="btn btn-warning">Detalle</button>
      </div>
    </div>
  )
}
export default Card