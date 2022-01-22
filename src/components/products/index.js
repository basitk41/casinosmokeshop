import "./style.css";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import Card from "../ui/card";
const Products = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="product">
      <div className="product-inner">
        <section className="title">
          <Slider autoplay timingFunction="ease-in-out">
            {images.map((image) => (
              <img src={`images/${image}.jpg`} alt={`slider ${image}`} />
            ))}
          </Slider>
          <h1>Products</h1>
          <div className="row">
            {images.map((card) => (
              <Card />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
