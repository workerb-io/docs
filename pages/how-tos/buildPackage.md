import DocBox from '~/components/docbox'
import Link from 'next/link'
import InitDirStruc from './images/initial_dir_structure.png'
import PostDirStruc from './images/dist_structure.png'

<DocBox title={'workerB | Docs/ Create Package/ Get Started'}>

## **Build Package**
<hr/>
<br/>

In this tutorial, we'll show you how to build the default package created using `create-workerb-package` in your local machine.


By this time you already have a project structure with initial boilerplate code and the project structure you will be seeing something similar to this:

<img
src={InitDirStruc}
alt="Initial Directory Structure"
height={280}
width={150}
/>

#### Build Process

Run the following command inside the package folder to build your local package

`yarn build`

_# or_

`npm run build`

After building the package the directory structure will now have a dist folder like this:

<img
src={PostDirStruc}
alt="Directory Structure after build"
height={295}
width={150}
/>

<br />
<br />

In the <Link href="/how-tos/runPackage"> next </Link> tutorial, we will show you how to run the package locally.

</DocBox>