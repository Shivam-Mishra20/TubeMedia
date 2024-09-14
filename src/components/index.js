import { Suspense, lazy } from 'react';

// Lazy load the components
export const Navbar = lazy(() => import('./Navbar'));
export const Feed = lazy(() => import('./Feed'));
export const ChannelDetail = lazy(() => import('./ChannelDetail'));
export const SearchFeed = lazy(() => import('./SearchFeed'));
export const VideoDetail = lazy(() => import('./VideoDetail'));
export const SearchBar = lazy(() => import('./SearchBar'));
export const SideBar = lazy(() => import('./SideBar'));
export const Videos = lazy(() => import('./Videos'));
export const VideoCard = lazy(() => import('./VideoCard'));
export const ChannelCard = lazy(() => import('./ChannelCard'));
export const Skelton = lazy(() => (import('./SkeletonLoader')))