import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'
import {wbeditor_run_event_binder} from '~/utils/helper'

<DocBox title={'workerB | Docs/ Create Package/ Get Started'}>

## **Get Started**
<hr/>
<br/>

Welcome to the workerb package documentation!
This guide will help you to get started with build your packages for the workerb platform.

### System Requirements

- [Yarn](https://classic.yarnpkg.com/en/docs/install/) OR [Node](https://nodejs.org/en/)
- MacOS, Windows (including WSL), and Linux are supported

### Setup

We recommend creating the next package for the workerb platform using [`create-workerb-package`](https://www.npmjs.com/package/create-workerb-package), which sets up everything automatically for you. To create a package, run:

```npx create-workerb-package```

_Alternatively_ you can install this utility globally using npm by running:

`npm install -g create-workerb-package`

To get started you can run this command anywhere in your system:

```create-workerb-package```

After running this command you will be prompted to enter the package name, after entering the package name you are all set up to start developing.

In the [next]() tutorial we will show you how to run the package locally.

</DocBox>