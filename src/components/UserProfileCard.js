import React from 'react'
import PropTypes from 'prop-types'

const UserProfileCard = props => {
  return (
    <div>
      <img
        src="https://initia.org/wp-content/uploads/2017/07/default-profile.png"
        alt="default"
      />
      <h1>User Name</h1>
    </div>
  )
}

UserProfileCard.propTypes = {}

export default UserProfileCard
