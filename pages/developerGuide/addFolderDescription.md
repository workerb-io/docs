import DocBox from '~/components/docbox'
import AddFolderDescription from './images/add_folder_description.png'
import Link from 'next/link'


<DocBox title={'workerB | Docs/ Developer Guide/ Add Folder Description '}>

### **Add Folder Description**
<hr/>

After creating a new package using the command `npx create-workerb-package` and adding some folder and actions, you might want to add some icons for the folders. You can do that by adding the folder description in the `webpack.config.js` file,

There are three options for the fileDescription object as you can see in the picture,

```json
{
		path: 'pathToTheFolder',
		iconPath: 'iconPath for that folder',
		description: 'Description of that folder',
}
```

<img
src={AddFolderDescription}
alt="add_folder_description"
width="1000"
/>
</DocBox>
