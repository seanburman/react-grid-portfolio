import './ProjectSnippets.css'
import '../pages.css'
import { useDispatch } from 'react-redux'
import { clearProject } from '../../../features/projects/projectsSlice'

const reactIcon = <i className="fab fa-react technologies-icon blue" />
const cssIcon = <i className="fab fa-css3-alt technologies-icon blue" />
const htmlIcon = <i className="fab fa-html5 technologies-icon orange" />
const nodeIcon = <i className="fab fa-node-js technologies-icon green" />
const reduxIcon = <img src="/img/redux.png" alt="react rudex" className="redux-icon"/>

function ProjectSnippet(
    {title, children, react=false, redux= false, css=false, html=false, mongo=false, node=false, 
        link, repo}
    ) {
        
    const dispatch = useDispatch()

    const closeProject = () => {
        dispatch(
            clearProject()
        )
    }

    return (
        <div className="grid-container-col-1 fade-in">
            <div className="project-snippet-nav">
            <button onClick={closeProject}>
            <i className="fas fa-arrow-circle-left" />
            Back to Projects</button>
            </div>
            <div className="snippet-header">
            <h4>{title}</h4>
            </div>
            <div className="snippet-content">
            {children}
            </div>
            <div className="hz-rule"></div>

                <div className="technologies">
                    <h4>Link {repo && "+ Repository"}</h4>
                    <a href={link} target="blank">
                        <i className="fas fa-link technologies-icon" />
                    </a>
                    { repo &&
                    <a href={repo} target="blank">
                        <i className="fab fa-github technologies-icon" />
                    </a>
                    }
                </div>
        
            <div className="hz-rule"></div>
            <div className="technologies"><h4>Stack</h4>
            {react && reactIcon}
            {redux && reduxIcon}
            {css && cssIcon}
            {html && htmlIcon}
            {node && nodeIcon}
            </div>
        </div>
    )
}

export function Nathalie(){
    return (
        <ProjectSnippet react css html
        title="Nathalie Anne Design"
        link="https://nathalieannedesign.com"
        repo="https://github.com/seanburman/nathalie-anne"
        >
        I worked with Nathalie Anne Design to develop their own work portfolio to spec
        from customized wire frames they designed themself. This is an ongoing project that
        will soon feature a reusable blog app written from scratch that implements React, Redux,
        and MongoDB.
        </ProjectSnippet>
    )
}
export function Concept(){
    return (
        <ProjectSnippet react css html node
        title="Concept Portfolio"
        link="https://concept-portolfio.netlify.app/"
        repo="https://github.com/seanburman/react-portfolio"
        >
        I wrote my first React portfolio project as a concept for a single page application with a continuous user experience. My goal was to achieve a sense of continuity and fluidity between states of the application that are more or less identitical between a mobile and desktop view.
        </ProjectSnippet>
    )
}

export function FlexGrid(){
    return (
        <ProjectSnippet react redux css html node
        title="React / Redux / Grid Portfolio"
        link="https://www.seanburman.ca"
        repo="https://github.com/seanburman/react-grid-portfolio"
        >
        With a focus on symmetry and minimalism, I built this portfolio using React to elaborate on the first iteration of my portfolio. The interface is designed to be intuitive and easy to navigate while maintaining a quirky style that borders between professional and playful. 
        </ProjectSnippet>
    )
}

export function CCC(){
    return (
        <ProjectSnippet react css html node
        title="Catherine Clark Connects"
        link="https://catherineclarkconnects.com"
        >
        Catherine Clark Connects is an ongoing web contract project for the trauma counselor and author, Catherine Clark. The primary intiative of this project is to drive book sales and to serve as a launch point for Catherine's future workshops with additional features such as a booking calendar and self-report questionnaires.
        </ProjectSnippet>
    )
}

export function Future(){
    return (
        <ProjectSnippet react css html node
        title="Future Projects"
        link="https://www.seanburman.ca"
        repo="https://github.com/seanburman/"
        >
        Soon to be added projects will be examples of my self-driven learning of full stack web applications using React, NodeJS, ExpressJS, and MongoDB. Check back soon for previews of my growth as a developer!<br/><br/>
        Feel free you reach out if you would like to collaborate!
        </ProjectSnippet>
    )
}