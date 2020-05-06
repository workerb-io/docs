import React from 'react'
import Link from 'next/link'

export const ListItem = ({ title, routeName, children }) => {

    const dropdownHandler = (e) => {
        e.preventDefault();

        let ele = e.target;
        ele.classList.toggle('dd_ico_rotate');
        ele.closest('.list_items').lastChild.classList.toggle('collapsed');
    }

    return (
        <li className='list_items'>
            <Link href={routeName}>
                <a>
                    <div className="list_title">
                        <span>{title}</span>
                        {children ?
                            (
                                <span className='dd_ico' onClick={dropdownHandler}>
                                    <img src={require('../img/dropdown.svg')} />
                                </span>
                            ) : null
                        }
                    </div>
                </a>
            </Link>
            {children ?
                (
                    <ul className='list_child collapsed' >
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
}