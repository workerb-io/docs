import React, { useEffect } from 'react';
import Link from 'next/link';

const SlugHelp = () => {
    useEffect(() => {
        const h4_links = document.querySelectorAll('.doc_content h4')
        let slughelp = document.querySelector('#slughelp')
        if (h4_links.length !== 0) {
            Object.values(h4_links).map(e => {
                let el = document.createElement("li");
                el.innerHTML = `<a href='#${e.id}'>${e.id}</a>`
                slughelp.append(el)
            })
        } else {
            slughelp.classList.add('hide')
        }
    }, []);

    return (
        < div id='slughelp'>
            <p>On this page</p>
        </div>
    )
}

export default SlugHelp;