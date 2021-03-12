import DocBox from '~/components/docbox'
import Link from 'next/link'

<DocBox title={'workerB | Docs/ Developer Guide/ Actions'}>

# **Actions**
<hr/>



Actions are predefined scripts that actually do the work you want to automate using workerB. You define what you want to do i.e. `go to a site, click here, type there  etc...` in the actions file. Actions are the leaf nodes of the package tree. Each actions may or may not be inside an options node.

Anywhere inside the `/src/actions/` folder you can create an action by creating a new file named `<action_name>.ts`. The basic structure for an action file is like the following,

```js
// @description Your description for the action

Actual Action Code
For example:

if (options.repos) {
	open(options.repos.html_url + '/pulls')
} else {
	notify('Repository not found', 'error', 3000)
}
```
</DocBox>
