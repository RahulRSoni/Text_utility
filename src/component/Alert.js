import React from 'react'

export default function Alert(props) {

    const capital = (word) => word.charAt(0).toUpperCase() + word.slice(1);
    return (
            <div style={{height: '50px'}}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capital(props.alert.type)}</strong>{props.alert.msg}
                </div>
            </div>}
    </div>
    )
}
