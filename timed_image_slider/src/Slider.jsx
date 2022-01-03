import { useState, useEffect, useRef } from 'react';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userImages, setUserImages] = useState([]);
  let imagesLength = useRef();

  const fetchData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const { results } = await response.json();
    const images = results.map((result) => result.picture.large);
    return images;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setUserImages(data);
      imagesLength.current = data.length;
    });
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? imagesLength.current - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === imagesLength.current - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="sliderContainer">
      <span className="arrowLeft" onClick={prevSlide}>
        &lt;
      </span>
      <span className="arrowRight" onClick={nextSlide}>
        &gt;
      </span>
      {userImages.map((img, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <img src={img} alt="travel" className="sliderImg" />
            )}
          </div>
        );
      })}
    </div>
  );
};
