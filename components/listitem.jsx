import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga'

export const ListItem = ({ title, routeName, children }) => {

    const clickHandler = (title) =>{
        ReactGA.event({
            category: 'docs_sidenav',
            label: `docs_sidenav_${title}`,
            action: `sidenav btn:${title} clicked`
        })
    }

    return(
        <li className='list_items'>
            <Link href={routeName}>
                <div className='list_title' onClick={()=>clickHandler(title)}>
                    {title}
                </div>
            </Link>
            {children ?
                (
                    <ul className='list_child' >
                        {children
                            .map(e =>
                                <Link key={e.id} href={`${routeName}` + `${e.routeName}`}>
                                    <li className='list_child_items' onClick={()=>clickHandler(title)}>{e.title}</li>
                                </Link>
                            )
                        }
                    </ul>
                )
                : null
            }
        </li>
    )
}