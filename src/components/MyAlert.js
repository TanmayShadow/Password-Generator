import React from 'react'

export default function MyAlert(prop) {
  return (
    prop.alert && <div>
      <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{prop.alert.type}</strong> {prop.alert.msg}
      </div>
    </div>
  )
}
