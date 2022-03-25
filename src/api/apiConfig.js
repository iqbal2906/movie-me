const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "dd89841b7a53b045472cfc4f3aa56ab9",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
