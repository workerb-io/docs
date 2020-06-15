import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/Demos/HTTP APIs'}>

### **HTTP APIs**
<hr/>
<br/>

In this demo, we get a list of employees and create a new one.

export const wb_script_1 = `function decodeApiResponse(apiResponse){
    var result = JSON.parse(apiResponse)
    var response = JSON.parse(result.response)
 
    return response
}
 
function fetchAndDisplayEmployees () {
    var employeeListResponse = httpGet("http://dummy.restapiexample.com/api/v1/employees")
    var response = decodeApiResponse(employeeListResponse)
    var employeesList = response.data
 
    employeesList.forEach(function (data) {
        log("Employee: " + data.employee_name, "blue")
    })
}
 
function createEmployeeAndDisplay () {
    var employeeCreateResponse = httpPost(
        "http://dummy.restapiexample.com/api/v1/create",
        JSON.stringify({
            "name": "John Doe",
            "salary": "15000",
            "age": "22"
        }),
        {
            "content-type": "application/json"
        }
    )
 
    var response = decodeApiResponse(employeeCreateResponse)
 
    if (response.status === "success") {
        notify("Employee created", "success", 3000)
        Object.keys(response.data)
            .forEach(function (key) {
                log(key + ": " + response.data[key], "blue")
            })
    }
}
 
fetchAndDisplayEmployees()
createEmployeeAndDisplay()
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
/>

</DocBox>