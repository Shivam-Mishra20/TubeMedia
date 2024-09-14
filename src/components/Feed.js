import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/FetchFromAPI";

import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Arijit");
  const [videos, setVideos] = useState([]);



  useEffect(() => {
    setVideos(null);
    //set before fetching videos nll

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row", }, gap: 2 }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },


        }}
      >
        <SideBar

          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

      </Box>

      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          foreweight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
