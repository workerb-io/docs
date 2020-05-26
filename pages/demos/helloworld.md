import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/readAll'}>

### **Hello World**
<br/>
<hr/>

In this example, we search for workerb.io on google.com.

```javascript
1 open('https://www.google.com')
2 type('workerb.io', '[aria-label="Search"]', {
3	'method': 'by_query_selector'
4 })
5 submit('[aria-label="Search"]', {
6 	'method': 'by_query_selector'
7 })
```

</DocBox>