const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a30de5cd4546e069dc49d498fe2a5ff6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
