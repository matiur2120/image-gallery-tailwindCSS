import React from "react";

const SearchTerm = ({ searchText }) => {
  const [text, setText] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  console.log(text);
  return (
    <div className='max-w-sm mx-auto overflow-hidden my-5 rounded'>
      <form action='' className='w-full max-w-sm' onSubmit={handleSubmit}>
        <div className='flex items-center border-bottom border-b-2 border-teal-500 py-2'>
          <input
            type='text'
            value={text}
            placeholder='Search image'
            onChange={handleChange}
            className='apperance-none bg-transparent border-none w-full text-teal-700 p-2  focus:outline-none'
          />
          <button
            type='submit'
            className='mr-1 flex-shrink-0 focus:outline-none bg-blue-500 px-4 py-2 rounded text-gray-100 text-sm font-semibold  focus:ring-2'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchTerm;
