import React from 'react'
import Button from './components/Button'
import {Plus} from "@phosphor-icons/react"
import ButtonPopover from './components/ButtonPopover'
import { ToastContainer } from 'react-toastify';

//TODO: use props
export const ProfileContact = () => {
  return (
    <div className='profile-contact'>
        <div className='pcontact-container'>
            <div className='pcontact-item-container'> 
                <div className='pcontact-item-title'>
                    Email
                </div>
                <div className='pcontact-item-body'>
                    zohaib@organization.org
                </div>
            </div>
            <div className='pcontact-item-container'> 
                <div className='pcontact-item-title'>
                    Slack
                </div>
                <div className='pcontact-item-body'>
                    @zohaibcs
                </div>
            </div>
            <ButtonPopover  icon={Plus} text="New request" />
            <ToastContainer limit={1} />
        </div>
    </div>
  )
}
