import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/Wikipedia'}>

### **Wikipedia**
<hr/>
<br/>

In this demo, we open up a new tab, run a wikipedia search for Steve Jobs and download the results.

```javascript
1  var tabResult = runInTab(
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
12 
13 download("wikipedia.txt", tabResult, "text")
```

</DocBox>