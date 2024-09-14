import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box, } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Skelton } from './components';



const App = () => {
  return (
    <HashRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Suspense fallback={< Skelton />}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/Channel/:id" exact element={<ChannelDetail />} />
            <Route path="/Search/:SearchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Suspense>
      </Box>
    </HashRouter>
  );
};

export default App;
