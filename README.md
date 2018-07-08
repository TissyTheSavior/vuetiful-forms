# Vuetiful Forms
> A Beautiful API for building forms with Vue.js 
## How to use

In this example we'll be in a single file component (.vue file)


First import VuetifulForm and optionally The Error Component 
```
<script>
    import { VuetifulForm, Error } from 'vuetiful-forms';
    ...
```
Next set up your data properties and include a Form object
> form objects should extend Form from [form guard](https://github.com/TissyTheSavior/form-guard).
```vue
 data() {
    return {
        form: new MyForm(),
    }
},
```

Next Let's make our template
```vue
<template>
    <vuetiful-form :form="form" @startSubmit="onStartSubmit" @success="onSuccess" @error="onError">
        <template slot="form-title">Title of Form</template>
        <label for="input-name">Name:</label>
        <error :error="form.validator.getError('property')"></error>
        <input id="input-name" type="text" v-model="form.property">
        <template slot="button-text">Submit</template>
    </vuetiful-form>
</template>
```
On the first line of the template we pass in our Form object.

Then we have 3 events being emitted from our form component.

- @startSubmit
  > Emitted before the form is submitted to server.
- @success
  > Emitted when form is done being submitted
- @error
  > Emitted when the form has an error

> When the form is submitted it will disable the form from being submitted again then call a .validate() method on on the form. If it fails validation it will be enabled again. then it will call a .submit() method on the form. 

# Examples

Here are just a few examples for clarification on how I use this package.

### Example Login Form

Here is an example to get you started in the simplest form.

LoginForm.js
```js
import { Form } from 'form-guard';
import axios from 'axios';

export default class LoginForm extends  Form{
    
    constructor() {
        super();
        this.email = '';
        this.password = '';
    }
    
    rules() {
        return {
            email: ['required', 'email'],
            password: ['required', 'min:6'],
        }
    }
    
    submit() {
        let credentials = {
            email: this.email,
            password: this.password,
        };
        return axios.post('https://myapp.com/api/login', credentials);
    }
    
    
}
```
Login.vue
```vue
<template>
    <vuetiful-form>
        <label>
            Email:
            <error :error="form.validator.getError('email')"></error>
            <input v-model="form.email" type="email">
        </label>
        <label>
            Password:
            <error :error="form.validator.getError('password')"></error>
            <input v-model="form.password" type="password">
        </label>
    </vuetiful-form>
</template>

<script>
    import { VuetifulForm, Error } from 'vuetiful-forms';
    import LoginForm    from "Path/To/LoginForm";

    export default {
        name: "Login",
        components: { Error, VuetifulForm },

        data() {
            return {
                form: new LoginForm(),
            }
        }

    }
</script>
```

### Example Contact Form

Also the form can have nested objects and validate them.

LoginForm.js
```js
import { Form } from 'tissy-form-validator';
import axios from 'axios';

export default class ContactForm extends  Form{
    
    constructor() {
        super();
        this.name = '';
        this.company = {
            name: '',
            email: '',
            website: '',
            phone: '',
        };
    }
    
    rules() {
        return {
            firstName: ['required'],
            lastName: ['required'],
            company: {
                email: ['email', 'required'],
                website: ['url'], 
                phone: ['phone'], 
            }
        }
    }
    
    submit() {
        let data = {
            // set data to the data above
        };
        return axios.post('https://myapp.com/api/contact', data);
    }
    
    
}
```
Contact.vue
```vue
<template>
    <vuetiful-form @startSubmit="/* async indicator */" @success="$route.push('success/')" @error="/* show error message. */">
        <label>
            Name
            <error :error="form.validator.getError('name')"></error>
            <input v-model="form.name" type="text">
        </label>
        <label>
            Company
            <error :error="form.validator.getError('company.name')"></error>
            <input v-model="form.company.name" type="text">
        </label>
        <label>
            Email
            <error :error="form.validator.getError('company.email')"></error>
            <input v-model="form.company.email" type="text">
        </label>
        <label>
            Website
            <error :error="form.validator.getError('company.website')"></error>
            <input v-model="form.company.website" type="text">
        </label>
        <label>
            Phone
            <error :error="form.validator.getError('company.phone')"></error>
            <input v-model="form.company.phone" type="text">
        </label>
        <template slot="button-text">Let's get in touch</template>
    </vuetiful-form>
</template>

<script>
    import { VuetifulForm, Error } from 'vuetiful-forms';
    import ContactForm    from "Path/To/ContactForm";

    export default {
        name: "Login",
        components: { Error, VuetifulForm },

        data() {
            return {
                form: new ContactForm(),
            }
        }

    }
</script>
```