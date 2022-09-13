import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'



function Search({ HideButtons = false }) {
  const [state , dispatch] = useStateValue();

  const [input, setInput] = useState('')
  const history = useNavigate()

  function search(event){

    event.preventDefault();
    console.log('u hit me ', input)
    dispatch({

      type : actionTypes.SET_SEARCH_TERM,
      term : input

    })
    history('/search')
   
  }
  return (
   

    <form className="search">

      <div className="search__input">

          <SearchIcon  className='search__input-Icon' />

          <input  value={input} onChange={event => setInput(event.target.value)}/>
          <MicIcon />
      </div>

      {
        !HideButtons ? ( 
            <div className="search__buttons">

              <Button type='submit' onClick={search} >Google Search</Button>
              <Button>I'm Feeling Lucky</Button>

            </div> ):

              (
              
              <div className="search__buttons">

                <Button className='searchbuttonhidden' type='submit' onClick={search} >Google Search</Button>
                <Button className='searchbuttonhidden'>I'm Feeling Lucky</Button>

              </div> )
      }


      
    </form>
  )
}

export default Search