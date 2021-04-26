import '../pages.css'
import './About.css'
import '../../../assets/global-styles.css'
import { useDispatch } from 'react-redux'
import { injectModal } from '../../../features/modals/modalsSlice'
import { Modal } from '../../../features/modals/Modals'
import React from 'react'

export default function About() {

    const dispatch = useDispatch()

    function openModal(content){
        dispatch (
            injectModal(content)
        )
    }

    return(
        <React.Fragment>
            <Modal />
            <div className="grid-container-col-2 fade-in">
            
                <div 
                className="about-item bg-blue bounce shadow" 
                onClick={() => openModal('skills')}>
                <i className="fas fa-drafting-compass about" />
                Technical Skills
                </div>

                <div 
                className="about-item bg-yellow bounce shadow" 
                onClick={() => openModal('mission')}>
                <i className="fas fa-rocket about" />
                Mission & Values
                </div>

                <div 
                className="about-item bg-green bounce shadow" 
                onClick={() => openModal('education')}>
                <i className="fas fa-graduation-cap about" />
                Education
                </div>

                <div className="about-item bg-pink bounce shadow"
                onClick={() => openModal('experience')}>
                <i className="fas fa-briefcase about" />
                Experience
                </div>
            </div>
        </React.Fragment>
    )
}