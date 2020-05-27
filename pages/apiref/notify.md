import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/notify '}>

### **notify**
<hr/>
<br/>

The **notify** function can be used to display a message to the user. 

<br/>

##### Arguments

-   **message**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the text to be displayed.
-   **type**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the type of the notification. Following values are supported:
    -   success
    -   error
-   **timeout**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) used to specify the duration for which the notification will be displayed.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 notify('this is a success notification', 'success', 3000)
2 notify('this is a error notification', 'error', 3000)
```

</DocBox>
