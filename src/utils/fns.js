// TODO: convert to fetch
const getQueryURL = (query) =>
  `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const getRelatedURL = (videoId) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet,id&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export { getQueryURL, getRelatedURL };
