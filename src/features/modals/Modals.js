import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Close } from '../../components/Buttons/Buttons'
import { clearModal } from '../../features/modals/modalsSlice'
import { mission, skills, education, experience } from '../../views/pages/About/Snippets'
import './Modals.css'

export function ModalRead({children, click}) {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch (
            clearModal()
        )
    }

    return (
            <div className="modal-read" onClick={()=>{}}>
            <Close click={closeModal}/>
                <div className="modal-content">
                {children}
                </div>
            </div>
    )
}

export function Modal({children}) {

    const [modal] = useSelector(state => state.modals)

    return (
            modal ?
            <div className="modal-backdrop fade-in">
            <ModalRead>
            {
                {
                    'skills': skills,
                    'mission': mission,
                    'education': education,
                    'experience': experience
                }[modal]
            }
            </ModalRead>
            </div> : null
    )
}