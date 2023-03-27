import React from 'react'
import searchIcon from '../../assets/images/icon/Shape.png'
import { SearchArea, InputBox } from './styles'

const InputButton = ({ handleInput }) => {
  return (
    <SearchArea>
      <InputBox type="text" onChange={handleInput} placeholder="Search for any word…" />
      <img src={searchIcon} />
    </SearchArea>
  )
}

export default InputButton
