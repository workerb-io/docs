import DocBox from '~/components/docbox'
import Link from 'next/link'
import ReposList from './images/wb_github_repos.png'


<DocBox title={'workerB | Docs/ Developer Guide/ Options'}>

# **Options**
<hr/>

Options are the nodes in the package tree, which will lead you to either another `options` or an `action`.

You can add static options and dynamic options. For either of them you need to create a file named `get_options.ts` anywhere inside `src/actions` folder except for the folders named `option`.

From the `get_options.ts` file you need to return an stringified object with the following structure,

```json
    {
        add: [],
        remove: []
    }
```

In the object you can specify either or both of add and remove key. The values will be an array with your options. They can be either an action(in the same directory as the `get_options.ts` file) or a folder name(that also should be in the same directory as the `get_options.ts` file).

If you do not have any `get_options.ts` file for a directory, workerb extension will travarse through all the actions and folders inside that directory and add them in the options list for that specific folder.

## Static Options
These options are always the same, they doesn't change depending on the user. Like for `wb-github` package, at the top level there are 3 options. Search, Setup and Orgs. Here Search and Setup are actually actions and static options. And the Orgs is a folder which will contain some dynamic options. We will learn about dynamic options later. So, here the 3 options namely Search, Setup and Orgs are actually staitc options and should not be changed depending on user. If we see the top level `get_options.ts` file for wb-github,

```js
// @description Get initial options
import { accessToken } from '../utils/constants'

const returnOptions = () => {
	if (!accessToken) {
		return JSON.stringify({
			remove: ['search', 'orgs'],
		})
	} else {
		return JSON.stringify({
			remove: ['setup'],
		})
	}
}

export default returnOptions

```

We can see that, if the user doesn't have accessToken, we are removing option `search` and `orgs` from the options list by adding them inside the array for `remove` key.
Otherwise we are removing the `setup` option from the options.

## Dynamic Options
The code structure is same as the static options. But we generate the options dynamically buy calling an API or someother way. The main thing is for dynamic options the options will not be same for different users.

For example the options for `repos` folder is not same for all user. For each user they will see their own repos. We generate the options using github REST API and list all the available repos for that specific user. If we inspect the `get_options.ts` file for `wb-github` package's `repos` folder we can see the following,

```js
// @description list organization/user repos
import { decodeApiResponse } from '../../../../utils/helper'
import { accessToken } from '../../../../utils/constants'

let organizationRepoList: any[] = []

if (options.orgs) {
	let organizationRepoResponse = httpGet(`${options.orgs.repos_url}?_=${new Date().getTime()}`, {
		Authorization: 'token ' + accessToken,
	})
	let organizationRepoResponseObject = decodeApiResponse(organizationRepoResponse)
	organizationRepoList = organizationRepoResponseObject.response
}

export default () => {
	return JSON.stringify({
		add: organizationRepoList.map((repo) => {
			repo.branches_url = repo.branches_url.split('{')[0]
			repo.issues_url = repo.issues_url.split('{')[0]
			repo.pulls_url = repo.pulls_url.split('{')[0]
			return {
				name: repo.name,
				repo_name: repo.name,
				id: repo.id,
				html_url: repo.html_url,
				issues_url: repo.issues_url,
				pulls_url: repo.pulls_url,
				branches_url: repo.branches_url,
				description: repo.description ? repo.description : repo.html_url,
				owner: repo.owner,
				url: repo.url,
			}
		}),
		remove: options.orgs ? (options.orgs.type === 'User' ? [] : ['new']) : [],
	})
}

```

As you can see we are iterating through `organizationRepoList` and populate the array for `add` key during return from the method. Here we are adding all the repos for a specific user and see a similar screen like the following,


<img
src={ReposList}
alt="Github Repos List"
/>


</DocBox>
