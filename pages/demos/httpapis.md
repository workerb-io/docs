import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Demos/HTTP APIs'}>

### **HTTP APIs**
<hr/>
<br/>

In this demo, we get a list of employees and create a new one.

```javascript
1 function decodeApiResponse(apiRespone) {
2   var result = JSON.parse(apiRespone)
3   var response = JSON.parse(result.response)
4
5   return response
6 }
7
8 function fetchAndDisplayEmployees () {
9   var employeeListResponse = httpGet("http://dummy.restapiexample.com/api/v1/employees")
10  var response = decodeApiResponse(employeeListResponse)
11  var employeesList = response.data
12
13  employeesList.forEach(function (data) {
14      log("Employee: " + data.employee_name, "blue")
15  })
16 }
17 
18 function createEmployeeAndDisplay () {
19   var employeeCreateResponse = httpPost(
20      "http://dummy.restapiexample.com/api/v1/create",
21      JSON.stringify({
22          "name": "John Doe",
23          "salary": "15000",
24          "age": "22"
25        }),
26      {
27          "content-type": "application/json"
28      }
29  )
30    
31  var response = decodeApiResponse(employeeCreateResponse)
32  
33  if (response.status === "success") {
34      notify("Employee created", "success", 3000)
35      Object.keys(response.data)
36          .forEach(function (key) {
37              log(key + ": " + response.data[key], "blue")
38          })
39   }
40 }
41 
42 fetchAndDisplayEmployees()
43 createEmployeeAndDisplay()
```

</DocBox>