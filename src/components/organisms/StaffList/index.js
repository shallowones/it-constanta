import React from 'react'
import PropTypes from 'prop-types'

import getStringWithLineBreakers from 'utils/getStringWithLineBreakers'

StaffList.propTypes = {
  staffList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isHidden: PropTypes.bool.isRequired
    })
  )
}

export default function StaffList (props) {
  const { staffList } = props

  return (
    <div className='staff-list'>
      {staffList.filter(staffItem => !staffItem.isHidden).map(staffItem => {
        return (
          <div key={staffItem.id} className='staff-list__item'>
            {getStringWithLineBreakers(staffItem.name)}
          </div>
        )
      })}
    </div>
  )
}
