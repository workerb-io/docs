import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'
import {wbeditor_run_event_binder} from '~/utils/helper'


<DocBox title={'workerB | Docs/Demos/Jenkins Build'}>

### **Jenkins Build**
<hr/>
<br/>

In this demo, we start a new CI for a jenkins job. If the job name is not provided, we prompt the user for a new job..

export const wb_script_1 = `open("http://jenkins.workerb.io/")
 
var job_title = args[0]
 
if (!job_title) {
    job_title = prompt("provide a valid name for your new job")
}
 
open("http://jenkins.workerb.io/view/all/newJob")
click('#name','by_query_selector')
type(job_title, 'Enter an item name',{method: 'by_label'})
click('.hudson_model_FreeStyleProject', { method: 'by_query_selector'})
click('OK')
 
open("http://jenkins.workerb.io/job/"+job_title+"/")
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    runClickCallback={() => wbeditor_run_event_binder()}
/>

</DocBox>
