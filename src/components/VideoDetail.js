import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Skeleton } from "@mui/material"; // Import Skeleton
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Get video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetails(data.items[0])
    );

    // Get related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!VideoDetail?.snippet) {
    return (
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              {/* Skeleton for video player */}
              <Skeleton variant="rectangular" width="100%" height="400px" />
              {/* Skeleton for title */}
              <Skeleton variant="text" width="60%" height={30} sx={{ margin: "10px 0" }} />
              {/* Skeleton for channel info */}
              <Skeleton variant="text" width="40%" height={20} />
              {/* Skeleton for view and like counts */}
              <Skeleton variant="text" width="30%" height={20} />
            </Box>
          </Box>
        </Stack>
      </Box>
    );
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              sx={{
                margin: "10px",
                color: "white",
                fontWeight: "400",
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "white" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  sx={{
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {!videos ? (
            <>
              {/* Skeleton for related videos */}
              <Skeleton variant="rectangular" width="100%" height="300px" />
              <Skeleton variant="rectangular" width="100%" height="300px" sx={{ marginTop: "10px" }} />
            </>
          ) : (
            <Videos videos={videos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
