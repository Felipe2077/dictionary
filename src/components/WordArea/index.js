import React from 'react'
import { Container, WordHeader, SectionBody } from './style'
import playBtn from '../../assets/images/icon/play_btn.svg'
import SectionHeader from '../SectionHeader'

const WordArea = ({ word, audio }) => {

  if (word !== null) {
    return (
      <Container>
        <WordHeader>
          <div>
            <h1>{word && word[0].word}</h1>
            <p>{word && word[0].phonetic}</p>
          </div>
          {word && <audio controls >
            <source src={audio} type="audio/mpeg" />
          </audio>}
          <img src={playBtn} />
        </WordHeader>
        <SectionHeader title='noun' />
        <SectionBody>
          <p>Meaning</p>
          <ul>
            {word && word[0].meanings[0].definitions.map((definition, index) => <li key={index}>{definition.definition}</li>)}
          </ul>
          <p>Synonyms <button>eletronic keyboard</button></p>
        </SectionBody>
        <SectionHeader title='verb' />
        <SectionBody>
          <p>Meaning</p>
          <ul>
            <li>To type on a computer keyboard.</li>

          </ul>



        </SectionBody>
      </Container>
    )
  }
}
export default WordArea
