import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css'; // Your custom CSS

const testimonialsData = [
  {
    id: 1,
    name: "Jena Karlis",
    role: "Store Owner",
    stars: 5,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Enim nisi quem export duis labore cillum magna..."
  },
  {
    id: 2,
    name: "Matt Brandon",
    role: "Freelancer",
    stars: 5,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos..."
  },
  {
    id: 3,
    name: "John Larson",
    role: "Entrepreneur",
    stars: 5,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua..."
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "CEO",
    stars: 5,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    id: 5,
    name: "David Smith",
    role: "Manager",
    stars: 4,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 6,
    name: "Kartik Smith",
    role: "Manager",
    stars: 4,
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    review: "Eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

const chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Testimonials = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Dynamically adjust the number of testimonials shown per slide based on screen size
  const updateItemsPerSlide = () => {
    if (window.innerWidth < 768) {
      setItemsPerSlide(1); // 1 testimonial per slide for small screens
    } else {
      setItemsPerSlide(3); // 3 testimonials per slide for large screens
    }
  };

  useEffect(() => {
    updateItemsPerSlide(); // Set on initial load

    // Add a resize event listener to adjust when the window is resized
    window.addEventListener('resize', updateItemsPerSlide);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
    };
  }, []);

  // Chunk the testimonials based on the current screen size
  const testimonialChunks = chunkArray(testimonialsData, itemsPerSlide);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Testimonials</h2>
      <p className="text-center text-muted">
      Here’s what some of my clients have said about working with me:
      </p>

      <Carousel interval={3000} controls indicators>
        {testimonialChunks.map((testimonialChunk, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {testimonialChunk.map((item) => (
                <div key={item.id} className={`col-lg-${12/itemsPerSlide} col-md-6 col-sm-12 text-center`}>
                  <div className="testimonial p-3">
                    <img
                      src={item.image}
                      className="testimonial-img rounded-circle mx-auto d-block"
                      alt={item.name}
                    />
                    <h5 className="mt-3">{item.name}</h5>
                    <p className="title">{item.role}</p>
                    <div className="stars text-warning">{'★'.repeat(item.stars)}</div>
                    <p className="testimonial-text mt-3">
                      {item.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
