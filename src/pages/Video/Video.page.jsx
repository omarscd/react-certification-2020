import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import RecommendationsList from '../../components/RecommendationsList';
import RecommendationItem from '../../components/RecommendationItem';
import { getInfoURL, getRelatedURL, fetchData } from '../../utils/fns';

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

  const [videoData, setVideo] = useState(null);
  const [relatedData, setRelated] = useState(null);

  useEffect(() => {
    fetchData(getInfoURL(videoId)).then((data) => setVideo(data));
    fetchData(getRelatedURL(videoId)).then((data) => setRelated(data));
  }, [videoId]);

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
            <div>Loading...</div>
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
          {!relatedData ? (
            <div>Loading...</div>
          ) : (
            <RecommendationsList>
              {relatedData.items.map((item) => (
                <RecommendationItem
                  key={item.id.videoId}
                  id={item.id.videoId}
                  title={item.snippet.title}
                  thumbnail={item.snippet.thumbnails.default.url}
                />
              ))}
            </RecommendationsList>
          )}
        </Recommendations>
      </Container>
    </Layout>
  );
};

export default VideoPage;
