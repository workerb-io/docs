import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/notify '}>

### **notify**
<br/>
<hr/>

`notify` is used for sending notification from user scripts to user.

**Arguments**

-   `message` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used as notification message.
-   `type` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used as notification type. Notification can be of two type
    -   success
    -   error
-   `timeout` ([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) value used as duration till the notification will be shown.

**Example**

```javascript
1 notify('this is a success notification', 'success', 3000)
2 notify('this is a error notification', 'error', 3000)
```

</DocBox>
