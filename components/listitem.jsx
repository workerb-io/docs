import React from 'react'
import Link from 'next/link'

export const ListItem = ({ title, routeName, children }) => (
    <li className='list_items'>
        <Link href={routeName}>
            <a>
                <div className="list_title">{title}</div>
            </a>
        </Link>
        {children ?
            (
                <ul className='list_child' >
                    {children
                        .map(e =>
                            <Link key={e.id} href={`${routeName}` + `${e.routeName}`}>
                                <li className='list_child_items'>{e.title}</li>
                            </Link>
                        )
                    }
                </ul>
            )
            : null
        }
    </li>
)