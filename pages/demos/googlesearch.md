import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'
import {wbeditor_run_event_binder} from '~/utils/helper'

<DocBox title={'workerB | Docs/Demos/Google Search'}>

### **Google Search**
<hr/>
<br/>

In this demo, we search for workerb.io on google.com

export const wb_script_1 = `open('https://www.google.com')
type('workerb.io', 'Search')
submit()
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    runClickCallback={() => wbeditor_run_event_binder()}
/>
</DocBox>