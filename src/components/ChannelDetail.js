import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";



const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log("ChannelDetail", channelDetail, videos);

  useEffect(() => {
    //set channel detail 
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    //set video
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="90.8vh">
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(9,247,244,1) 0%, rgba(0,237,255,1) 0%, rgba(247,5,246,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />

        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
