import React from 'react';
import { Box, Skeleton } from '@mui/material';

const SkeletonLoader = () => (
    <Box sx={{ backgroundColor: "gray", padding: "20px" }}>
        {/* Skeleton for Navbar */}
        <Skeleton variant="rectangular" height={60} sx={{ marginBottom: "20px" }} />

        {/* Skeleton for Main Content (Feed or other content) */}
        <Skeleton variant="rectangular" width="100%" height={300} sx={{ marginBottom: "20px" }} />
        <Skeleton variant="rectangular" width="100%" height={300} />
    </Box>
);

export default SkeletonLoader;
