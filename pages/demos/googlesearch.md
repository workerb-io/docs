import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

export const WB_SCRIPT = `open('https://www.google.com')
type('workerb.io', 'Search')
submit()
`

<DocBox title={'workerB | Docs/Demos/Google Search'}>

### **Google Search**
<hr/>
<br/>

In this demo, we search for workerb.io on google.com


<WBeditor
    code = {WB_SCRIPT}
    showShareIcon={false}
/>


</DocBox>