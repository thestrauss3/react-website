import React, { Component } from 'react';

import ProjectTile from '../components/ProjectTile';

class ProjectsContainer extends Component {
  render() {
    let projects = this.props.projects.map((project, index) => {
      return(
        <ProjectTile
        name={project.name}
        description={project.description}
        imgSrc={project.imgSrc}
        tags={project.tags}
        />
      )
    })
    return (
      <div className="projects">
        {projects}
      </div>
    )
  }
}

export default ProjectsContainer;
