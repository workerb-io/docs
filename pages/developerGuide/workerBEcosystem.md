import DocBox from '~/components/docbox'
import Link from 'next/link'

<DocBox title={'workerB | Docs/ Developer Guide/ WorkerB Ecosystem'}>

# **Developer Guide**
## **WorkerB Ecosystem**
<hr/>
<br/>

Let's get familiar with the codebase before you start to contribute. At first we will familiarize ourselves with some keywords specific to workerB.

There are three entity in the workerb ecosystem. 

1. WorkerB runtime
2. WorkerB extension
3. Packages

How they are connected with each other?

#### WorkerB runtime
The runtime is a custom JS runtime. It has all the functionality of a JS runtime. In addition to that, It provides us with all the methods we are going to use for creating different actions. For more information you can read the <Link href="/apiref">API Reference</Link>.

#### Extension
The extension runs our actions from the package and uses the WorkerB runtime to execute the actions. This works as a blackbox for us. When we install some package, the extension gets all the actions specified for that package and allow us to choose which actions to run.

#### Package
Package is where all your actions reside. For each package, there will be some predefined actions and folders. For each folder there will be other actions and may be other nested folder and so on and on...

You can consider the package as a tree. Where each node can have some actions and some other nodes. Actions are the leaf nodes.

So, if we travarse through the package tree and collect the leaves, we will end up having a bunch of actions.

If we install any package we will have access to those specific actios for that package.

Now you may ask, how to create an action?

#### Action
Each action is a bunch of instructions. They are more like predefined scripts which will be executed by the extension if you choose to run them.

For creating an action you have choose a folder where you want to add that action. If you want to add the action to the top level, you have to create that `<action_name>.ts` file under `src/actions` folder.
If you want to place your action in some other level you can do that inside anyfolder that is child of `src/actions`.


</DocBox>
