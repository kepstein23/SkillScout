import React from 'react'

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
            <button class='pcontact-new-request-btn' type="button">
                + New Request
            </button>
        </div>
    </div>
  )
}
