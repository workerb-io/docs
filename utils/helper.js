export const ga_anchor_binder = () => {

    let amplitude = undefined
    if (typeof window !== 'undefined') {
        //resolve window not defined issue; ssr
        amplitude = require('amplitude-js/amplitude');
    }

    //content anchor_tags only
    let anchors = document.querySelectorAll('.container-fluid a');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', () => {
            ga('send', {
                hitType: 'event',
                eventCategory: `docs_a_click:${anchors[i].innerText}`,
                eventAction: 'click'
            });
            amplitude.getInstance().logEvent(`docs_a_click:${anchors[i].innerText}`)
        })
    }
}
