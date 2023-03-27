import React from 'react'
import { Section } from './style'

const SectionHeader = ({ title }) => {
  return (
    <Section>
      <h3>{title}</h3>
      <div></div>
    </Section>
  )
}

export default SectionHeader;
