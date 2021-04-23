import React, { useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchTerm from "./components/SearchTerm";

const App = () => {
  const [images, setImages] = React.useState([]);
  const [isLoadding, setIsLoadding] = React.useState(true);
  const [term, setTerm] = React.useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=${term}s&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoadding(false);
      })
      .catch((error) => console.log(error));
  }, [term]);

  return (
    <div className='container mx-auto my-8'>
      <SearchTerm searchText={(text) => setTerm(text)} />
      {!isLoadding && images.length === 0 && (
        <h2 className='text-4xl text-gray-600 text-center'>No images found</h2>
      )}
      {isLoadding ? (
        <h2 className='text-center'>Loadding.........</h2>
      ) : (
        <div className='grid grid-cols-4  gap-6'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
