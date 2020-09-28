const getQueryURL = (query) =>
  `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const getRelatedURL = (videoId) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet,id&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const getInfoURL = (videoId) =>
  `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const fetchData = (url, options = {}) => {
  return fetch(url, options).then((res) => res.json());
};

export { getQueryURL, getRelatedURL, getInfoURL, fetchData };
