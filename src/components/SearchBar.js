import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(""); // Clear the search field after submission
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state as the user types
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        value={searchTerm} // Bind searchTerm to the input field
        onChange={handleSearchChange} // Update state on change
        placeholder="Search"
        autoComplete="off"  // Disable browser autocomplete
        sx={{
          backgroundColor: "#181818",
          color: "#fff",
          borderRadius: "50px",
          padding: 0, // Remove default padding
          width: { xs: "100%", sm: "400px", md: "500px" },  // Responsive width for different screen sizes
          "& .MuiOutlinedInput-root": {
            padding: "4px 10px", // Adjust padding to reduce height
            fontSize: "14px", // Adjust font size to reduce height
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
        InputProps={{
          style: { color: "#fff", height: "45px" }, // Set the height explicitly
          endAdornment: (  // Search icon on the right side
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
