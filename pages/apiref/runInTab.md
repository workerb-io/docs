import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/runInTab'}>

### **runInTab**
<hr/>
<br/>

The **runInTab** function runs the specified function in a new tab and returns the result to the current tab.

<br/>

##### Arguments

-   **function**: A [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) which specifies the code that should be run in the new tab.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which is stringified version of the value returned by the passed function. 

<br/>

##### Examples

```javascript
1  var tabResult = runInTab(
2    function () {
3        open("https://cnn.com")
4        click('#searchInput', { method: "by_query_selector" })
5        type("steve jobs", '#searchInput', { method: 'by_query_selector' })
6        submit('#searchInput', { expectReload: true })
7        var tableTxt = readAll(".mw-parser-output > p")
8        tableTxt = JSON.parse(tableTxt).join("\n")
9        return tableTxt
10    }
11 )
```

<br/>

##### Demos
-   [Wikipedia](/demos/wikipedia)

</DocBox>
