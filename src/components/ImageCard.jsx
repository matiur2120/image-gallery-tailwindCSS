import React from "react";

const ImageCard = ({ image }) => {
  const [imageTag, setImageTag] = React.useState([]);
  const imgTag = image.tags.split(", ");
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full h-44' src={image.webformatURL} alt='' />

      <div className='px-6 py-4'>
        <div className='font-semibold text-purple-500 text-xl mb-2'>
          <strong>Photo by</strong> {image.user}
        </div>
        <ul>
          <li>
            <strong>Views </strong> {image.views}
          </li>
          <li>
            <strong>Likes</strong> {image.likes}
          </li>
          <li>
            <strong>Dowloads </strong>
            {image.downloads}
          </li>
        </ul>
        <div className='py-4 space-x-2 space-y-2'>
          {imgTag.map((tag, index) => (
            <span
              key={index}
              className='inline-block rounded-full px-2 py-1 font-semibold text-sm bg-gray-400 text-gray-600'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
