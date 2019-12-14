import * as React from 'react';
import './Card.css';

interface IProps {
  name: string;
}

export const Card = (props: IProps) => {
  return (
    <div className="card-container">
      {props.name}
    </div>
  );
}