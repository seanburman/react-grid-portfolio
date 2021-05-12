import './Projects.css'
import '../../../assets/global-styles.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewProject } from '../../../features/projects/projectsSlice'
import { CCC, Concept, FlexGrid, Future, Nathalie } from './ProjectSnippets'

function ProjectItem({name, title, text}) {

    const [ toggle, setToggle ] = useState(false)
    const expand = toggle ? " expand " : " collapse "
    const toggleButton = toggle ? " fa-toggle-open " : " fa-toggle-closed "

    const dispatch = useDispatch()

    function changeProject(name){
        dispatch(
            viewProject(name)
        )
    }

    return (
        <div className={"project-item bounce-sm shadow-light"}>
            <div className="title-wrapper" onClick={() => setToggle(!toggle)}>
                <h3 className="project-title">{title}</h3>
                <i className={"fas fa-times-circle fa-toggle" + toggleButton} />
            </div>
            <div className={"project-description" + expand }>
                <p>{text}</p>
            </div>
            <div className={"project-view" + expand}>
            <button onClick={() => changeProject(name)}>View Details</button>
            </div>
        </div>
    )
}

export default function Projects(){
    const project = useSelector(state => state.projects)
    

    if(!project.length > 0) {
    return (
        <div className="grid-container-col-1 fade-in">
            <ProjectItem
            name="Nathalie"
            title="Nathalie Anne Design"
            text="I worked with Nathalie Anne Design to develop their own work portfolio to spec
            from customized wire frames..."
             />
            <ProjectItem
            name="Concept"
            title="Concept Portfolio"
            text="I wrote my first React portfolio project as a concept for a single page application with a continuous user experience..."
             />
            <ProjectItem
            name="FlexGrid"
            title="React / Redux / Grid Portfolio"
            text="With a focus on symmetry and minimalism, I built this portfolio using React to elaborate on the first iteration of my portfolio..."
             />
            <ProjectItem
            name="CCC"
            title="Catherine Clark Connects"
            text="Catherine Clark Connects is an ongoing web contract project for the trauma counselor and author, Catherine Clark..."
             />
            <ProjectItem 
            name="Future"
            title="Future Projects"
            text="Soon to be added projects will be examples of my self-driven learning of full stack web applications..."
             />
        
        </div>
    )}
    else return (
        <React.Fragment>
        {
            {
                'Nathalie': <Nathalie />,
                'Concept': <Concept />,
                'FlexGrid': <FlexGrid />,
                'CCC': <CCC />,
                'Future': <Future />
            }[project]
        }
        </React.Fragment>
        
    )
}