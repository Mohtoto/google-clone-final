import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term) //LIVE API CALL

  //AIzaSyDXwkkacghJJKEku1HykerkrtOtKIxJytM

  //Mock

 
 
  return (
    <div className="search__page">
      <div className="search__page-header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="search__header-body">
          <Search HideButtons />

          <div className="search__page-options">
            <div className="search__page-options--left">

                <div className="search__page-option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>

                <div className="search__page-option">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>


                <div className="search__page-option">
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>



                <div className="search__page-option">
                  <LocalOfferIcon />
                  <Link to="/shopping">shopping</Link>
                </div>

                <div className="search__page-option">
                  <RoomIcon />
                  <Link to="/maps">maps</Link>
                </div>


                <div className="search__page-option">
                  <MoreVertIcon />
                  <Link to="/more">more</Link>
                </div>
            </div>
          

            <div className="search__page-options--right">

              <div className="search__page-option">
                <Link to='/settings'>Settings</Link>
              </div>

              <div className="search__page-option">
                <Link to='/tools'>Tools</Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {term && (

        <div className="search__page-results">

            <p className="search__page-resultCount">
              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map(item => (

              <div className="search__page-result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&  item.pagemap?.cse_image[0]?.src && (
                    <img  className="search__page-resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                  )}

                 {item.displayLink}
                </a>

                <a className="search__page-Title" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="search__page-result__Snippet">
                  {item.snippet}

                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
