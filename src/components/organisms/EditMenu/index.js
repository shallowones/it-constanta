import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StaffControlList, Button } from 'components'

const VERB_ACTION_OPEN = 'Open'
const VERB_ACTION_CLOSE = 'Close'

class EditMenu extends Component {
  static propTypes = {
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

  state = {
    isClosed: false
  }

  render () {
    const { staffList, onStaffItemAdd, onStaffItemNameChange, onStaffItemHiddenStateChange } = this.props
    const { isClosed } = this.state
    const verbAction = isClosed ? VERB_ACTION_OPEN : VERB_ACTION_CLOSE

    return (
      <div className='edit-menu'>
        <Button onButtonClick={() => this.onChangeOpeningState()} innerText={`${verbAction} menu`}/>
        <StaffControlList
          isClosed={isClosed}
          staffList={staffList}
          onStaffItemAdd={onStaffItemAdd}
          onStaffItemNameChange={onStaffItemNameChange}
          onStaffItemHiddenStateChange={onStaffItemHiddenStateChange}
        />
      </div>
    )
  }

  onChangeOpeningState () {
    this.setState(prevProps => ({ isClosed: !prevProps.isClosed }))
  }
}

export default EditMenu
