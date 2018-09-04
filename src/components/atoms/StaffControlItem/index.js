import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

const CONTROL_NAME_REMOVE = 'Remove'
const CONTROL_NAME_RESTORE = 'Restore'
const SEND_DELAY = 300

class StaffControlItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isHidden: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeHiddenState: PropTypes.func.isRequired
  }

  state = {
    timer: null,
    name: ''
  }

  render () {
    const { id, isHidden, index, onChangeHiddenState } = this.props
    const controlName = isHidden ? CONTROL_NAME_RESTORE : CONTROL_NAME_REMOVE

    return (
      <div className='staff-control-list__item'>
        <div>{`Item #${index + 1}`}</div>
        <textarea value={this.state.name} maxLength={255} onChange={event => this.onTextAreaChange(event)} />
        <Button onButtonClick={() => onChangeHiddenState(id)} innerText={controlName} />
      </div>
    )
  }

  onTextAreaChange (event) {
    const { id, onChangeName } = this.props
    const { timer } = this.state
    const { value } = event.target

    // стейт меняем с помощью setState и коллбэка в ней для асинхронности
    this.setState(() => ({ name: value }))

    // таймер от дребезгов
    timer && clearTimeout(timer)
    // тут, соответственно, так же (через коллбэк)
    this.setState(prevState => ({ timer: setTimeout(() => onChangeName(id, prevState.name), SEND_DELAY) }))
  }
}

export default StaffControlItem
