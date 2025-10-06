import { StarIcon } from "@heroicons/react/20/solid";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductReviewCard from "./ProductReviewCard";
import { Box, LinearProgress } from "@mui/material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/Men/mens_kurta";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findProductsById } from "../../../State/Product/Action";
import { store } from "../../../State/store";
import { addItemToCart } from "../../../State/Cart/Action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize }; // remove .name
    console.log("data - ", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };


  useEffect(() => {
    dispatch(findProductsById(params.productId));
  }, [params.productId]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[30rem]">
              <img
                alt={product.images[0].alt}
                src={products.product?.imageUrl}
                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
              />
            </div>
            <div className="flex space-x-5 justify-center mt-4">
              {product.images.slice(1).map((img) => (
                <div
                  key={img.src}
                  className="w-32 h-32 overflow-hidden rounded-lg"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {products.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900  mt-6">
                <p className="font-semibold">
                  {products.product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  {products.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {products.product?.discountPercent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating
                    name="half-rating-read"
                    precision={0.5}
                    value={4.5}
                    readOnly
                  />
                  <p className="opacity-50 text-sm">1,230 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-700 hover:text-indigo-500">
                    500 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <label
                          key={size.id}
                          aria-label={size.name}
                          className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                          <input
                            type="radio"
                            name="size"
                            value={size.name}
                            checked={selectedSize === size.name}
                            onChange={() => setSelectedSize(size.name)}
                            disabled={!size.inStock}
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                          />

                          <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            {size.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  color="secondary"
                  sx={{ px: "1rem", py: "0.5rem", marginTop: "1rem" }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating & Reviews Section */}
        <section className="mx-auto max-w-6xl pt-8">
          <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>

          <div className="border border-gray-200 p-8 rounded-lg bg-white">
            {/* Flex container with gap */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* LEFT: Individual Reviews */}
              <div className="flex-1">
                <div className="space-y-5">
                  {[1, 2, 3].map((_, idx) => (
                    <ProductReviewCard key={idx} />
                  ))}
                </div>
              </div>

              {/* RIGHT: Product Ratings Summary */}
              <div className="flex-2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold pb-2">Product Ratings</h2>

                <div className="flex items-center space-x-5 mb-5">
                  <Rating value={4.5} precision={0.5} readOnly />
                  <p className="opacity-60">54890 Ratings</p>
                </div>

                {/*Rating Progress */}
                <div className="flex items-center w-full mt-3">
                  <p className="mr-5 w-[8rem]">Excellent</p>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      width: "100%",
                      backgroundColor: "#e5e7eb", // track
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#16a34a", // green-600
                      },
                    }}
                  />
                  <p className="ml-5">54321</p>
                </div>

                <div className="flex items-center w-full mt-3">
                  <p className="mr-5 w-[8rem]">Very Good</p>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      width: "100%",
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#22c55e", // green-500
                      },
                    }}
                  />
                  <p className="ml-5">54321</p>
                </div>

                <div className="flex items-center w-full mt-3">
                  <p className="mr-5 w-[8rem]">Good</p>
                  <LinearProgress
                    variant="determinate"
                    value={40}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      width: "100%",
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#eab308", // yellow-500
                      },
                    }}
                  />
                  <p className="ml-5">54321</p>
                </div>

                <div className="flex items-center w-full mt-3">
                  <p className="mr-5 w-[8rem]">Average</p>
                  <LinearProgress
                    variant="determinate"
                    value={30}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      width: "100%",
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#f97316", // orange-500
                      },
                    }}
                  />
                  <p className="ml-5">54321</p>
                </div>

                <div className="flex items-center w-full mt-3">
                  <p className="mr-5 w-[8rem]">Poor</p>
                  <LinearProgress
                    variant="determinate"
                    value={10}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      width: "100%",
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#dc2626", // red-600
                      },
                    }}
                  />
                  <p className="ml-5">54321</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <h1>Similar Products</h1>
          <div className="flex flex-wrap space-y-5 gap-8">
            {mens_kurta.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
