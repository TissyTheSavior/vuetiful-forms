# Vuetiful Forms

> A Beautiful API for building forms with Vue.js 

## Setup

One thing that is required is another package.

``` bash
# npm
npm install tissy-form-validator
```
``` bash
# yarn
yarn add tissy-form-validator
```

This package is to setup easy form validations.

## How to use

In this example we'll be in a single file component (.vue file)


First import VuetifulForm and optionally The Error Component 
```
<script>
    import { VuetifulForm, Error } from 'vuetiful-forms';
    ...
```

Next Let's look at our template
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
On the first line of the template we pass in our Form object form objects should extend Form from tissy-form-validator.

When the form is submitted it will call a .validate() method on on the form