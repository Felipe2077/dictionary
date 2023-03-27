import React from 'react'
import { Container } from './style'

const TypoSwitcher = ({ handleTypography }) => {
  const [selectedValue, setSelectedValue] = React.useState('Inter');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  React.useEffect(() => {
    handleTypography(selectedValue);
    console.log(selectedValue);

  }, [selectedValue])
  return (
    <Container>
      <select value={selectedValue} onChange={handleChange}>
        <option value="Inter">Sans Serif</option>
        <option value="Lora"> Serif</option>
        <option value="Inconsolata">Mono</option>
      </select>

    </Container>
  )
}

export default TypoSwitcher
