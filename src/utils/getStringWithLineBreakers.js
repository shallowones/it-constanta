import React, { Fragment } from 'react'

export default function (string) {
  return string.split('\n').map((item, key) => {
    return <Fragment key={key}>{item}<br/></Fragment>
  })
}
