import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const FeedbackBtn = () => {
    const router = useRouter();

    useEffect(() => {
        let edit_btn = document.querySelector('#edit_page_fb_btn');
        let report_btn = document.querySelector('#report_fb_btn');

        let docs_fork_url = "https://github.com/workerb-io/docs/edit/master/pages";
        let report_issue_url = "https://github.com/workerb-io/docs/issues/new";
        let path = router.pathname;

        switch (path.match(/\//g).length) {
            case 1:
                edit_btn.href = path === '/' ?
                    docs_fork_url + path + 'index.md'
                    :
                    docs_fork_url + path + '/index.md'
                break;
            case 2:
                edit_btn.href = `${docs_fork_url}${path}.md`
                break;
        }

        let issue_body = `*%20Doc%20page:%20[${edit_btn.href.split('/master')[1]}](${window.location.href})`
        report_btn.href = `${report_issue_url}?body=${issue_body.replace(/\//g, '%2f')}`
    }, []);
    return (
        <div className="feedback_buttons">
            <a id='edit_page_fb_btn' target='_blank' href='#'>Edit Page</a>
            <a id='report_fb_btn' target='_blank' href='#'>Report Issue</a>
            <a id='getHelp' target='_blank' href='https://discuss.workerb.io'>Get Help</a>
        </div>
    )
}

export default FeedbackBtn;