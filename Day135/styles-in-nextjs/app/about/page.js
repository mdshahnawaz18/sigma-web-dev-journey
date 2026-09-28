"use client"
import React from 'react'


const about = () => {
    return (
        <div>

            <div className='container'>
                <p>This is about page</p>

                <style jsx>{
                    `
        .container{background-color: lightgray; padding: 20px;}
        `
                }
                </style>
            </div>
            <div className='container'>
                <p>Hey this is second container</p>
            </div>
        </div>
    )
}

export default about
