import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API'}>

### **API Reference**

#### **notify**

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

#### **log**

`log` is used to display logs throughout our script.

**Arguments**

-   `message` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value to display in log.
-   `color` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value to be used as the color of log.

**Example**

```javascript
1 log("this is a log", "blue")
```

</DocBox>
