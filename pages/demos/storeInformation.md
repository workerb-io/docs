import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/storeInformation'}>

### **storeInformation**
<br/>
<hr/>

_Lorem ipsum_ **3**

```javascript
1 var person = {}
2 
3 person.name = prompt("What is your name")
4 person.email = prompt("What is your email")
5 person.information = prompt("What is your information")
6
7 Object.keys(person)
8    .forEach(function (key) {
9        log(key + ": " + person[key], "blue")
10    })
```

</DocBox>