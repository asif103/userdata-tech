import React from 'react'

function Header({header}) {
    return (
        <thead>
            <tr>
                {
                    header.map(head => (<th key={head.field}>{head.name}</th>))
                }
            </tr>
        </thead>
    )
}

export default Header
