import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <div className="shipping-info">
          Free Shipping on Orders $50+<span className="underline">Details</span>
        </div>
      </div>
      <div className="company-container">
        <div className="company">EXPRESS</div>
      </div>
      <div className="icons-container">
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
        <div className="person-icon-div">
          <PersonOutlineIcon className="person-icon" />
        </div>
        <div className="suitcase-icon-div">
          <WorkOutlineIcon className="suitcase-icon" />
        </div>
        {/* Add your additional icon components here */}
      </div>
    </div>
  );
}

export default Navbar;
