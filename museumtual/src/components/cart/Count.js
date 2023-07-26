import React from 'react'

export default function Counter(props) {

    const { countCartItems } = props

    return (
        <div className='counter'>
            <a href='/cart'>

             🏛 {' '}
                {countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ) : (
                    ' '
                )}
            </a>
        </div>
    )
}
