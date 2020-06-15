import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/Jenkins Build'}>

### **Jenkins Build**
<hr/>
<br/>

In this demo, we start a new CI for a jenkins job. If the job name is not provided, we prompt the user for a new job..

```javascript
1  open("http://jenkins.workerb.io/")
2
3  var job_title = args[0]
4  
5  if (!job_title) {
6     job_title = prompt("provide a valid name for your new job")
7  }
8
9  open("http://jenkins.workerb.io/view/all/newJob")
10 click('#name','by_query_selector')
11 type(job_title, 'Enter an item name',{method: 'by_label'})
12 click('.hudson_model_FreeStyleProject', { method: 'by_query_selector'})
13 click('OK')
14 
15 open("http://jenkins.workerb.io/job/"+job_title+"/")
```

</DocBox>
