import { Grid, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";

  console.log(videos)

  return (
    <Grid container spacing={3}>
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Box>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </Grid>


      ))}
    </Grid>
  );
};

export default Videos;
