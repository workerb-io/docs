
let amplitude = undefined
if (typeof window !== 'undefined') {
    //resolve window not defined issue; ssr
    amplitude = require('amplitude-js/amplitude');
}

export const ga_element_binder = () => {
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

    // add event track for docs code select;
    let wb_editor_instances = document.querySelectorAll('textarea.editor-text-area')
    let doc_title = document.querySelector('.md_content>h3')
    for (let i = 0; i < wb_editor_instances.length; i++) {
        if (doc_title) {
            wb_editor_instances[i].addEventListener('select', () => {
                ga('send', {
                    hitType: 'event',
                    eventCategory: `docs_select:wbeditor_codeblock:${doc_title.innerText}`,
                    eventAction: 'select'
                });
                amplitude.getInstance().logEvent(`docs_select:wbeditor_codeblock:${doc_title.innerText}`)
            })
        }
    }

}

export const wbeditor_run_event_binder = () => {
    let pathname = window.location.pathname

    ga('send', {
        hitType: 'event',
        eventCategory: `docs_click_wb_editor:run: ${pathname}`,
        eventAction: 'click'
    });

    amplitude.getInstance().logEvent(`docs_click_wb_editor:run: ${pathname}`)
}