import Vue                from 'vue'
import { Form }           from 'form-guard'
import * as VuetifulForms from '../src/vuetiful-forms';

class MyForm extends Form {

    constructor() {
        super();
        this.name = 'default name';
        this.email = '';
        this.num = 5;
    }

    rules() {
        return {
            name : ['required'],
            email: ['email', 'required'],
            num: ['min:1', 'max:10'],
        }
    }

    submit() {
    }

}

let app = new Vue({
    el        : '#app',
    template: `
        <vuetiful-form :form="form">
            <vuetiful-input v-model="form.name" :error="form.validator.getError('name')">
                Name:
            </vuetiful-input>
            <vuetiful-input v-model="form.email" type="email" :error="form.validator.getError('email')" placeholder="email@example.com">
                Email:
            </vuetiful-input>
            <vuetiful-input v-model="form.num" :error="form.validator.getError('num')"  type="number">
                Number:
            </vuetiful-input>
        </vuetiful-form>
    `,
    data: {
        form: new MyForm(),
    },

    components: { ...VuetifulForms }
});
