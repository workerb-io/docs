import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/Google Search'}>

### **Google Search**
<hr/>
<br/>

In this demo, we search for workerb.io on google.com.

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