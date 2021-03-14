import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const ListItem = ({ title, routeName, children }) => {
    const router = useRouter();

    const dropdownHandler = (e) => {
        let ele = e.currentTarget;

        ele.closest('.list_item_with_children').lastChild.classList.toggle('collapsed');
        if (ele.children[1]) ele.children[1].classList.toggle('dd_ico_rotate');
    }

    const mob_sidenav_handler = () => {
        let sidenav = document.querySelector('.sidenav_container')
        let content = document.querySelector('.documentation_content')
        let hmbg = document.querySelector('.menu_toggle')
        sidenav.classList.toggle('d-none')
        content.classList.remove('d-none')
        hmbg.classList.toggle('is_active')
    }

    const active_route = router.pathname

    return (
        <li className='list_items' onClick={() => !children ? mob_sidenav_handler() : null}>
            {children ?
                <div className='list_item_with_children'>
                    <Link href={routeName}>
                        <div onClick={dropdownHandler} className={"list_title " + (active_route === routeName ? "active" : "")}>
                            <span>{title}</span>
                            <span className='dd_ico'>
                                <img src={require('../img/dropdown.svg')} />
                            </span>
                        </div>
                    </Link>
                    <ul className={
                        'list_child ' +
                        (active_route.includes(routeName) && active_route.match(/\//g)
                            .length > 1 ? '' : 'collapsed')
                    }>
                        {children
                            .map((e, i) =>
                                <Link key={i} href={`${routeName}` + `${e.routeName}`}>
                                    <li
                                        onClick={mob_sidenav_handler}
                                        className={"list_child_items " + (active_route === routeName + e.routeName ? "active" : "")}
                                    >{e.title}</li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
                :
                <Link href={routeName}>
                    <div className={"list_title " + (active_route === routeName ? "active" : "")}>
                        <span>{title}</span>
                    </div>
                </Link>
            }
        </li >
    )
}