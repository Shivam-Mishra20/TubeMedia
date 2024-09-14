import { Stack, Box } from "@mui/material";
import { categories } from "../utils/constants";
import useSidebarStore from '../State/Store'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const collapsed = useSidebarStore((state) => state.collapsed);  // Access the collapsed state

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        overflowX: { xs: "auto", },  // Horizontal scrolling on small screens, hidden on larger screens
        height: { xs: "auto", md: "95%" },  // Full height on medium+ screens
        flexDirection: { xs: "row", md: "column" },  // Row direction on small screens, column on medium+ screens
        width: {
          xs: "100%",  // Full width on small screens (xs)
          sm: "100%",  // Full width on small screens (sm)
          md: collapsed ? "80px" : "auto",  // Collapsed/expanded on medium and larger screens
        },
        // Gap between items: smaller on xs, larger on md
        transition: "width 0.3s ease",  // Smooth transition for collapsing/expanding


      }}
    >
      {categories.map((category, index) => (
        <>
          <Box
            component="button"
            onClick={() => setSelectedCategory(category.name)}
            sx={{
              background: category.name === selectedCategory ? "#FC1503" : "transparent",
              color: "white",
              display: "flex",
              gap: collapsed ? 1 : 1.3,

              alignItems: "center",
              margin: collapsed ? "15px" : "   ",
              justifyContent: collapsed ? "center" : "flex-start",
              padding: collapsed ? "0px" : "10px  20px",
              border: "none",  // Remove button border
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "lightgray",  // Hover background color
                color: 'red'
              },
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                textAlign: "center",
                marginRight: collapsed ? "0" : "5px",
                transition: "color 0.3s ease",  // Smooth color transition for icon
              }}
            >
              {category.icon}
            </span>
            {!collapsed && (
              <span
                style={{
                  opacity: category.name === selectedCategory ? "1" : "0.8",
                  transition: "opacity 0.3s ease",  // Smooth opacity transition
                }}
              >
                {category.name}
              </span>
            )}
          </Box>

          {/* Render <hr> after every five buttons */}
          {(index + 1) % 5 === 0 && <hr style={{ width: "80%", borderColor: "#FC1503" }} />}
        </>
      ))}
    </Stack>
  );
};

export default SideBar;
