import DocBox from '~/components/docbox'
import AddFolderDescription from './images/add_folder_description.png'
import AddPackageDescription from './images/add_package_description.png'
import Link from 'next/link'


<DocBox title={'workerB | Docs/ Developer Guide/ Add Package Description '}>

### **Add Package Description**
For adding the package description we need to modify the `webpack.config.js` file in the newly created package. There are two part in the package description,

The first one is the top level package description and the second one is the description for all the folders/sub-folders inside `src/actions/`.

For adding the top level package description you need to navigate to `webpack.config.js` file and update the options json object inside `WBMetaJsonGenerator` plugin section.

<img
src={AddPackageDescription}
alt="add_package_description"
width="1000"
/>

You will see a config like the following,

```json
{
			environment,
			package: 'Github',
			packageDescription: 'workerB package for github.com',
			packageIcon: 'src/actions/package_logo.png',
			readmeFile: 'README.md',
			sites: ['https://www.github.com'],
			folderDescriptionList,
}
```

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
