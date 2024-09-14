import { create } from 'zustand';

const useSidebarStore = create((set) => ({
    isSidebarOpen: true,  // Sidebar initially open
    collapsed: false,     // Sidebar initially expanded
    toggleSidebar: () => set((state) => ({
        collapsed: !state.collapsed,
        isSidebarOpen: true  // If toggled, ensure it's open
    })),
    closeSidebar: () => set({ isSidebarOpen: false }),
    openSidebar: () => set({ isSidebarOpen: true }),
}));

export default useSidebarStore;
