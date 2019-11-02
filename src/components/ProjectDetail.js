
import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

const projectDetails = (props) => {

  const projectID = props.match.params.banana
  return <h1>{myProjects.find(p => p.id === projectID).year}</h1>

}

export default projectDetails