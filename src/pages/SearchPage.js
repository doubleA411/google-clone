import React from 'react'
import "./SearchPage.css"
import { useStateValue } from '../StateProvider'
import { Link } from "react-router-dom"
import Search from "../components/Search"
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useGoogleSearch from '../useGoogleSearch'
import response from '../response'

function SearchPage() {

    const [{ term }, disptach] = useStateValue();
    const { data } = useGoogleSearch(term);
    // const data = response;

    console.log(data);

    return (
        <div className='search_page'>
            <div className='search_page_header'>
                <Link to="/">
                    <img className='search_page_logo'
                        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                        alt='search_logo'
                    />
                </Link>
                <div className='search_page_header_body'>
                    <Search hideButtons />

                    <div className='search_page_options'>
                        <div className='search_page_optionsL'>
                            <div className='search_page_option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='search_page_option'>
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='search_page_option'>
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='search_page_option'>
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='search_page_option'>
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className='search_page_option'>
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className='search_page_optionsR'>
                            <div className='search_page_option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='search_page_option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className='search_page_results'>
                    <p className='search_page_resultsCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='search_page_result'>
                            <a className='displayLink' href={item.link}>
                                
                                https://{item.displayLink}
                            </a>
                            <a href={item.link} className='search_page_resultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <div className='snippets'>
                                <p className='search_page_resultSnippets'>
                                    {item.snippet}
                                </p>
                                {item.pagemap?.cse_image?.length > 0
                                    && item.pagemap?.cse_image[0]?.src && (
                                        <img className='rImage'
                                            src={item.pagemap?.cse_image[0]?.src}
                                            alt=""
                                        />
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage