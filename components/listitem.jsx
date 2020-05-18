import React from 'react'
import Link from 'next/link'

export const ListItem = ({ title, routeName, children }) => {

    const dropdownHandler = (e) => {
        let ele = e.currentTarget;

        ele.closest('.list_items').lastChild.classList.toggle('collapsed');
        if (ele.children[1]) ele.children[1].classList.toggle('dd_ico_rotate');
    }

    return (
        <li className='list_items'>
            <Link href={routeName}>
                <a>
                    <div className="list_title" onClick={dropdownHandler}>
                        <span>{title}</span>
                        {children ?
                            (
                                <span className='dd_ico'>
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
                            .sort((a, b) => {
                                let titleA = a.title;
                                let titleB = b.title;
                                if (titleA < titleB) {
                                    return -1;
                                }
                                if (titleA > titleB) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((e, i) =>
                                <Link key={i} href={`${routeName}` + `${e.routeName}`}>
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