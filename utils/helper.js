export const ga_anchor_binder = () =>{
    let anchors = document.querySelectorAll('a');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click',()=>{
            ga('send',{
                hitType: 'event',
                eventCategory: `wbdocs_a_click:${anchors[i].innerText}`,
                eventAction: 'click'
            });
        })
    }
}