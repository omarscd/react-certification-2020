import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import useFetch from '../../utils/hooks/useFetch';

import responses from '../../tests/fixtures/apiSearchResponse';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Recommendations = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const VideoPage = () => {
  const { videoId } = useParams();

  const { response: videoData } = useFetch(
    `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    {}
  );

  return (
    <Layout>
      <Container>
        <Video>
          <iframe
            title="video"
            height="600px"
            src={`https://www.youtube.com/embed/${videoId}`}
          />
          {!videoData ? (
            <div>Lading data...</div>
          ) : (
            <>
              <div>Title: {videoData.items[0].snippet.title}</div>
              <div>Description: {videoData.items[0].snippet.description}</div>
              <div>Channel Title: {videoData.items[0].snippet.channelTitle}</div>
              <div>Tags: {videoData.items[0].snippet.tags.join(', ')}</div>
            </>
          )}
        </Video>
        <Recommendations>
          {responses[0].items.map((item) => (
            <div key={item.id.videoId}>{item.snippet.title}</div>
          ))}
        </Recommendations>
      </Container>
    </Layout>
  );
};

export default VideoPage;
