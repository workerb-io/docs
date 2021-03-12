import DocBox from '~/components/docbox'
import Link from 'next/link'


<DocBox title={'workerB | Docs/ Developer Guide/ Run Package During Development '}>

### **Running Package in Dev Mode**
<hr/>
<br/>

Fortunately, you don't have to build a project and upload it each time you change a file/folder during development. You can run the `yarn watch` command to run the package during development.

For the first time you have to load the pakcage using `loadDir` command. After that each time you change and save some file you will see the changes directly in your package, without reloading the dist. 

Although, if you move/create/delete some file/folder you need to run the `reIndex` command to get the update in the package. 

</DocBox>
