import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/runInTab'}>

### **runInTab**
<br/>
<hr/>

`runInTab` run script in child tab and return the results to main tab.

**Arguments**

-   `function` ([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)) function to run in the new tab.

**Return**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value returned by the passed function in stringified format.

**Example**

```javascript
1  var tabResult = runInNewTab(
2    function () {
3        open("https://en.wikipedia.org/wiki/Main_Page")
4        click('#searchInput', { method: "by_query_selector" })
5        type("steve jobs", '#searchInput', { method: 'by_query_selector' })
6        submit('#searchInput', { expectReload: true })
7        var tableTxt = readAll(".mw-parser-output > p")
8        tableTxt = JSON.parse(tableTxt).join("\n")
9        return tableTxt
10    }
11 )

download("wikipedia.txt", tabResult, "text")
```

</DocBox>
