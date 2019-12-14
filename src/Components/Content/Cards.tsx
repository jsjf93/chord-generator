import * as React from 'react';
import { Card } from './Card';
import './Cards.css';

interface IProps {
  chordList: string[];
}

export const Cards = (props: IProps) => {
  return (
    <div className="cards-container">
      {props.chordList.map(c =>
        <Card name={c} />
      )}
    </div>
  );
}