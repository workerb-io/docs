import DocBox from '~/components/docbox'
import Link from 'next/link'
import ExtPerm from './images/extension_permission.png'
import LoadDir from './images/loadDir.png'
import DistActionBar from './images/action_bar_dist.png'

<DocBox title={'workerB | Docs/ Create Package/ Get Started'}>

## **Run package in your local machine**
<hr/>
<br/>

In this tutorial, we'll show you how to run the default package created using `create-workerb-package` in your local machine.

#### Prerequisites

- Create an account on [workerb](https://dashboard.workerb.app/signup)
- Install [workerb extension](https://chrome.google.com/webstore/detail/workerb/jdbakbjkiklbibfccegfejjdlcgpnnpe)

#### Run Package on Workerb

By this time you've built the default package and now you can start running it on the workerb action bar by following these steps.

- Open the workerb action bar by Ctrl + k on your browser or you can open a new tab on chrome it will be visible there.

- Authorize the extension to read files from your system.

    - Open Chrome Settings/Extension
    - Open Details of workerb extension
    - Switch on **Allow access to file URLs**
    - Switch on **Collect errors**

_Here's the screenshot for this_

<img 
src={ExtPerm}
alt="Extension Permission"
height={80}
width={650}
/>

- In the Workerb Action Bar run `dev on`

_this will enable the development mode of the workerb platform to test the local package_

- Copy absolute path of the dist folder

_for windows, it looks like this `file:///D:/Path/wb-package/dist/`_

- In the Workerb Action Bar run the `loadDir` command and paste your dist folder path to load your local package:

<img 
src={LoadDir}
alt="Load dist directory"
height={40}
width={400}
/>

- After successfully loading your dist folder you will able to see the dist command as autosuggestion in Workerb Action Bar.

<img
src={DistActionBar}
alt="Dist in action bar"
height={80}
width={350}
/>

- On selecting the dist, you will be able to see all other actions in the default package

- Now, you can start adding actions in your package and test.

Before you can start adding actions to your package you must know what is an action and you need to be familiar with the codebase. Let's <Link href="/how-tos/deepDive">dive deeper into the folder structure</Link> and see how the magic happens.

</DocBox>