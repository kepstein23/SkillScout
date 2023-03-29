import Header from './Header';
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { ProfileContact } from './ProfileContact';

function ProfilePage() {
    return(
        <div className="Profile">
            {/* <Header /> */}
            <ProfileInfo>

            </ProfileInfo>
            <ProfileContact>
                
            </ProfileContact>
        </div>
    );
}

export default ProfilePage