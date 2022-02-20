


```javascript
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      setAlert({ show: true, msg: 'please enter value', type: 'danger' })
    } else if (name && isEditing) {
      // deal with Edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }
```

* we're calling  this multiple times.

There has to be a better approach.
we set up a function that is just looking for these

three values and also maybe we can set up some default ones.

And in the process, we're just going to speed up this alert functionality.
So in this case, what I could do is come up with a function name and I'll call this showAlert.

```javascript

 const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      showAlert(true,'danger','please enter value')
    } else if (name && isEditing) {
      // deal with Edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

```

If you just call it in one place, probably not a big deal to keep the alert.

But in my case, since we had multiple instances, I just thought that it's a bit faster if we come

up with a function.
### Hiding this alert in three seconds.

That we all need to pass in our showAlert to alert function, that's probably

going to be a start.

And then also I would want to set up some kind of useEffect in the alert.

So once the component renders, then I would want to call my useEffect.

And then, of course, in the useEffect, I will call that showAlert.

Or in this case, I'm just going to say that show is false, by the way, is by default.


```javascript
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
```