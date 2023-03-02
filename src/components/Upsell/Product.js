import productStyles from "./product.module.css";
import Image from "./img.png";

export default function Product() {
  return (
    <>
      <div className={productStyles.upsellSection}>
        <h3 className={productStyles.upsellProduct}>
          Want to get another product?
        </h3>
        <div className={productStyles.productContainer}>
          <div className={productStyles.productImgContainer}>
            <img src={Image} className={productStyles.productImg} />
          </div>
          <div className={productStyles.productDetails}>
            <h6>Luxurious Bathrobe</h6>
            <p>
              Variant: <span>Carmel</span>
            </p>
            <p className={productStyles.subItem}>
              Size: <span>Large</span>
            </p>
            <p className={productStyles.subItem}>
              Quantity: <span>1</span>
            </p>
            <p className={productStyles.subItem}>
              Price: <span className={productStyles.newPrice}>$19.99</span>{" "}
              <span className={productStyles.oldPrice}>$25.99</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
