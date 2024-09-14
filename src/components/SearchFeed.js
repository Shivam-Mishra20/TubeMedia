import { useState, useEffect, useMemo } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { SearchTerm } = useParams();

  // Memoize the search term to avoid unnecessary API calls
  const memoizedSearchTerm = useMemo(() => SearchTerm, [SearchTerm]);

  useEffect(() => {
    if (memoizedSearchTerm) {
      setLoading(true);
      fetchFromAPI(`search?part=snippet&q=${memoizedSearchTerm}`)
        .then((data) => {
          setVideos(data.items);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [memoizedSearchTerm]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{SearchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
