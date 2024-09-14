import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";


const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {


  return (

    <Card
      sx={{
        width: { xs: "100%", sm: "auto", md: "auto" },
        boxShadow: "none",
        borderRadius: 0, // Remove border-radius
      }}
    >
      {console.log(snippet)}
      {/* Card Media for Image */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia


          image={snippet?.thumbnails?.high?.url} // Use video thumbnail
          alt={snippet?.title}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            margin: "auto",
          }}
        />
      </Link>

      {/* Card Content */}
      <CardContent sx={{ background: "black", padding: "8px 0", borderRadius: 0 }}>
        {/* Video Title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 100)}
          </Typography>
        </Link>

        {/* Channel Name with 'Channel' text */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="white">
            Channel: {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
