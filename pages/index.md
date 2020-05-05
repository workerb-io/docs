import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs'}>
<div className='right-col-head'>
    <div className="left-head">
        <img src={require('../img/logo.png')} />
        <h4 className='left-head-h4-heading'>Documentation</h4>
    </div>
    <div className='right-head'>
        <div className='doc-head-icon-block'>
            <div className='doc-head-icon'><img src={require('../img/start-stop.svg')} /></div>
            <div className='doc-head-icon-detail'>Start/Stop Recording</div>
        </div>
        <div className='doc-head-icon-block'>
            <div className='doc-head-icon down'><img src={require('../img/keyboard.svg')} /></div>
            <div className='doc-head-icon-detail'>Display/Hide Action bar</div>
        </div>
    </div>
</div>

<br/><br/><br/>
<br/>
<hr/>

#### **Introduction**
<br/>

**workerB** is a browser automation platform. Its goal is to boost user productivity.

We win when you get more work done with less effort. 🚀🚀

**workerB** has two main components
* A JavaScript library which mimic user interactions in the browser
* A runtime which resides outside the webpage but within the browser

With the help of these, you can replace your interactions on any website with a script written in JavaScript. We call these scripts **actions**. The workerB [browser extension](https://chrome.google.com/webstore/devconsole/g05381353403899675261) provides runtime support for executing these actions. 

**workerB** platform comes with the following:
* Recorder for creating actions
* Actions management 
* Teams for sharing actions with your peers. 
* Tenant support for doing user management and access control. 
* Library for looking up actions written by others and publishing your own.

In this guide, we cover the following: 
* [API Reference](/apiref)
* [Examples](/examples)

</DocBox>
