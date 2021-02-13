import DocBox from '~/components/docbox'
import Link from 'next/link'
import Image from 'next/image'

<DocBox title={'workerB | Docs/ Create Package/ Get Started'}>

## **Run package in your local machine**
<hr/>
<br/>

In this tutorial, we'll show you how to run the default package created using `create-workerb-package` in your local machine.

### Prerequisites

- Create account on [workerb](https://dashboard.workerb.app/signup)
- Install [workerb extension](https://chrome.google.com/webstore/detail/workerb/jdbakbjkiklbibfccegfejjdlcgpnnpe)

### Run Locally

By this time you already have a project structure with initial boilerplate code and the project structure you will be seeing something similar to this:

<Image
src="/images/initial_dir_structure.png"
alt="Initial Directory Structure"
height={320}
width={180}
/>

#### Build Process

Run the following command inside the package folder to build this package

`yarn build`

_# or_

`npm run build`

After building the package the directory structure will now have a dist folder like this:

<Image
src="/images/dist_structure.png"
alt="Directory Structure after build"
height={300}
width={150}
/>

#### Run on Workerb Action Bar

By this time you've built the default package and now you can start running it on workerb action bar.

- Open workerb action bar by `Ctrl + k` on your browser or you can open new tab on chrome it will be visible there.

- Give permission to the extension to read files from your system.

    - Open Chrome Settings/Extension
    - Open Details of workerb extension
    - Switch on **Allow access to file URLs**
    - Switch on **Collect errors**

_Here's the screenshot for this_

<Image 
src="/images/extension_permission.png"
alt="Extension Permission"
height={80}
width={650}
/>

- In the Workerb Action Bar run `dev on`

_this will enable the development mode of workerb platform to test local package_

- Copy absolute path of the dist folder

_for windows it loos like this `file:///D:/Path/wb-package/dist/`_

- In the Workerb Action Bar run `loadDir` command and paste your dist folder path to load your local package:

<Image 
src="/images/loadDir.png"
alt="Load dist directory"
height={40}
width={400}
/>

- After successful loading your dist folder you will able to see dist command as an autosuggestion in Workerb Action Bar.

<Image
src="/images/action_bar_dist.png"
alt="Dist in action bar"
height={80}
width={350}
/>



</DocBox>