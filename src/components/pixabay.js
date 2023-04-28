const fetchImages = async (query, page) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=33717102-715c10c4f2cae8a60768f134f&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );

  const data = await response.json();

  return data;
};

export default fetchImages;
