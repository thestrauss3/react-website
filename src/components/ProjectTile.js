import React, { Component } from 'react';

const ProjectTile = (props) => {
  let tags = props.tags.map((tag, index) => {
    return(
      <span>{tag} </span>
    )
  })
  return (
    <div className="project-tile">
      <h1>{props.name}</h1>
      <img className="project-img" src={props.imgSrc} />
      <p>{props.description}</p>
      <ul>{tags}</ul>
    </div>
  )
}

export default ProjectTile;
