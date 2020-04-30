import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs'}>
<div className='right-col-head'>
    <div className="left-head">
        <img src={require('../img/logo.png')} />
        <h4>Documentation</h4>
        <p>
            Get a full overview of the basic settings that will
            take your search to the next level using workerB.
        </p>
    </div>
    <div className='right-head'>
        <div className='doc-head-icon-block'>
            <div className='doc-head-icon'><img src={require('../img/start-stop.svg')} /></div>
            <div className='doc-head-icon-detail'>Start/Stop Recording</div>
        </div>
        <div className='doc-head-icon-block'>
            <div className='doc-head-icon down'><img src={require('../img/keyboard.svg')} /></div>
            <div className='doc-head-icon-detail'>Display/Hide Keyboard</div>
        </div>
    </div>
</div>
<hr/>

#### **Introduction**

**workerB** lets you script browser interactions and execute them as a single action. It aims to boost your productivity and help you get more work done in less time 🚀.

**workerB** enables a user to run JaveScript code in browser across DOM models. This means that a user can write business logic which executes across different pages. Hence, a user can encode how she interacts with a site and perform these interactions in a scripted faction. This would save her time & effort. She would need to remember less about the site. Further, she can share the scripted actions with her peers and increase the overall productivity of her team.

To support this functionality, **workerB** requires with a browser extension to be installed in the browser. The browser extension lets the user type out actions that need to be executed. The browser extension will also execute the JavaScript code for the action in the browser. Only Chrome is supported right now.

**workerB** comes with JaveScript [functions](#functions) which mimic various actions that a user can perform in a browser. The next section goes through some sample scripts to show how such functions can be used.

</DocBox>
