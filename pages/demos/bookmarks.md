import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/Bookmarks++'}>

### **Bookmarks++**
<hr/>
<br/>

When we create bookmarks, we store a URL. This is limiting as you can only store a shortcut to a single resource. A workaround for this limitation is golinks. With golinks, you can support URL templates. So instead of bookmarking a URL like https://jira.workerb.io/browse/BE-293, you can create a golink: https://go/jira/<jira_id>. Then, you can open any JIRA by filling in the JIRA ID into the golink. For example, https://go/jira/BE-293

workerB runtime supports user specified arguments which can be used inside the script. This can be used to create URL templates. For example, the demo for [Google Search](/demos/googlesearch) can be updated to use a URL template, rather than typing the search from Google homepage.  

```javascript
1  var search_term = args[0]
2  
3  // if argument is not specified, prompt the user
4  if (!search_term) {
5    search_term = prompt("What do you want to search for?")
6  }
7  open('https://www.google.com/search?q' + search_term)
```

Similarly, you can perform a search on your Google drive by using the following script. 

```javascript
1  var search_term = args[0]
2  
3  // if argument is not specified, prompt the user
4  if (!search_term) {
5    search_term = prompt("What do you want to search for?")
6  }
7  open('https://docs.google.com/document/u/0/?tgif=d&q=' + search_term)
```

</DocBox>