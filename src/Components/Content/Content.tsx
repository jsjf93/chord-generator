import React, { useState } from 'react';
import './Content.css'
import { Cards } from './Cards';

export const Content = () => {
  const [chordList] = useState(getChords());
  const [chords, setChordList] = useState(shuffle(chordList).slice(0, 4));

  return (
    <div className="content-container">
      <Cards chordList={chords} />
      <div
        className="generate-button"
        onClick={() => setChordList(shuffle(chordList).slice(0, 4))}
      >
        Generate
      </div>
    </div>
  );
};

function getChords() {
  const notes: string[] = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
  ];

  const chordTypes: string[] = [
    'Maj7', 'Min7', '7', 'Min7b5'
  ];

  let chordList: string[] = [];
  notes.forEach(n =>
    chordTypes.forEach(c =>
      chordList.push(n + ' ' + c)));

  return chordList;
}

// Source: https://bost.ocks.org/mike/shuffle/
// Implementation of Fisher-Yates Shuffle
function shuffle(array: string[]): string[] {
  let m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}