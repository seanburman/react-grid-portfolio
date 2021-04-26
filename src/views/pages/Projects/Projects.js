import './Projects.css'
import '../../../assets/global-styles.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewProject } from '../../../features/projects/projectsSlice'
import { CCC, Concept, FlexGrid, Future } from './ProjectSnippets'

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
            name="Concept"
            title="Concept Portfolio"
            text="I wrote my first React portfolio project as a concept for a single page application with a continuous user experience..."
             />
            <ProjectItem
            name="FlexGrid"
            title="Flexbox / Grid / React Portfolio"
            text="With a focus on symmetry and minimalism, I built this portfolio using React to elaborate on the first iteration of my portfolio..."
             />
            <ProjectItem
            name="CCC"
            title="Web Development Contract"
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
                'Concept': <Concept />,
                'FlexGrid': <FlexGrid />,
                'CCC': <CCC />,
                'Future': <Future />
            }[project]
        }
        </React.Fragment>
        
    )
}