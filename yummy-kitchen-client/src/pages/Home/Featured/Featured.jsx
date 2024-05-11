import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-10 bg-fixed">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured tem"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May, 24</p>
          <p className="uppercase">Where Can I Gate Some Items?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque
            porro atque voluptatum in at eum expedita id unde optio consequatur
            eligendi nesciunt distinctio recusandae, maxime earum sit rem ipsum?
          </p>
          <button className="btn btn-info border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
