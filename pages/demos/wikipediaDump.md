import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/wikipediaDump'}>

### **wikipediaDump**
<br/>
<hr/>

_Lorem ipsum_ **2**

```javascript
1 open("https://en.wikipedia.org/wiki/Main_Page")
2 click('#searchInput', { method: "by_query_selector" })
3 type(args.join(" "), '#searchInput', { method: 'by_query_selector' })
4 submit('#searchInput', { expectReload: true })
5 var tableTxt = readAll(".mw-parser-output > p")
6 tableTxt = JSON.parse(tableTxt).join("\n")
7 download("wikipedia.txt", tableTxt, "text")
```

</DocBox>