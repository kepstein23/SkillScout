import React from 'react'
import Button from './components/Button'
import {Plus} from "@phosphor-icons/react"

//TODO: use props
export const ProfileContact = () => {
  return (
    <div class='profile-contact'>
        <div class='pcontact-container'>
            <div class='pcontact-item-container'> 
                <div class='pcontact-item-title'>
                    Email
                </div>
                <div class='pcontact-item-body'>
                    zohaib@organization.org
                </div>
            </div>
            <div class='pcontact-item-container'> 
                <div class='pcontact-item-title'>
                    Slack
                </div>
                <div class='pcontact-item-body'>
                    @zohaibcs
                </div>
            </div>
            <Button type='primary' icon={Plus} text="New request">
                + New Request
            </Button>
        </div>
       
    </div>
  )
}
