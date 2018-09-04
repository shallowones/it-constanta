import React from 'react'
import PropTypes from 'prop-types'

import { StaffControlItem, Button } from 'components'

StaffControlList.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  staffList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isHidden: PropTypes.bool.isRequired
    })
  ),
  onStaffItemAdd: PropTypes.func.isRequired,
  onStaffItemNameChange: PropTypes.func.isRequired,
  onStaffItemHiddenStateChange: PropTypes.func.isRequired
}

export default function StaffControlList (props) {
  const {
    isClosed,
    staffList,
    onStaffItemAdd,
    onStaffItemNameChange,
    onStaffItemHiddenStateChange
  } = props

  return !isClosed && (
    <div className='staff-control-list'>
      {staffList.map((staffItem, index) => (
        <StaffControlItem
          key={staffItem.id}
          index={index}
          id={staffItem.id}
          name={staffItem.name}
          isHidden={staffItem.isHidden}
          onChangeName={onStaffItemNameChange}
          onChangeHiddenState={onStaffItemHiddenStateChange}
        />
      ))}
      <Button onButtonClick={onStaffItemAdd} innerText='Add Item'/>
    </div>
  )
}
