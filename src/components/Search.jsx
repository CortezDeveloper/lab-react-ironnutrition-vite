import React from 'react'
import {Divider, Input} from 'antd';

function Search(props) {
    console.log(props)
  return (
    <>
        <Divider></Divider>

        <label>Search</label>
        <Input
            value={props.serachedString}
            type="text"
            onChange={(event) => props.setSearchedString(event.target.value)}
        />
    </>
   
  )
}

export default Search