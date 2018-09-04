import React, { Component } from 'react'

import { StaffList, EditMenu } from 'components'
import getRandom from 'utils/random'

const DEFAULT_STAFF_ITEM = {
  id: 0,
  name: '',
  isHidden: false
}

class App extends Component {
  state = {
    staffList: []
  }

  render () {
    const { staffList } = this.state

    return (
      <div className='page'>
        <StaffList staffList={staffList}/>
        <EditMenu
          staffList={staffList}
          onStaffItemAdd={() => this.onStaffItemAdd()}
          onStaffItemNameChange={(staffId, staffName) => this.onStaffItemNameChange(staffId, staffName)}
          onStaffItemHiddenStateChange={(staffId) => this.onStaffItemHiddenStateChange(staffId)}
        />
      </div>
    )
  }

  onStaffItemAdd () {
    this.setState(prevState => ({
      staffList: [
        ...prevState.staffList,
        { ...DEFAULT_STAFF_ITEM, id: getRandom() }
      ]
    }))
  }

  onStaffItemNameChange (staffId, staffName) {
    this.setState(prevState => {
      const staffList = prevState.staffList.map(staffItem => {
        if (staffItem.id === staffId) {
          return {
            ...staffItem,
            name: staffName
          }
        }

        return staffItem
      })

      return { staffList }
    })
  }

  onStaffItemHiddenStateChange (staffId) {
    this.setState(prevState => {
      const staffList = prevState.staffList.map(staffItem => {
        if (staffItem.id === staffId) {
          return {
            ...staffItem,
            isHidden: !staffItem.isHidden
          }
        }

        return staffItem
      })

      return { staffList }
    })
  }
}

export default App
