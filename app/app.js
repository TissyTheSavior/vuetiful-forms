import Vue                from 'vue'
import { Form }           from 'form-guard'
import * as VuetifulForms from '../src/vuetiful-forms';

class MyForm extends Form {

    constructor() {
        super();
        this.name = 'default name';
        this.email = '';
        this.num = 5;
        this.bool = false;
        this.select = '';
    }

    rules() {
        return {
            name : ['required'],
            email: ['email', 'required'],
            num: ['min:1', 'max:10'],
            bool: ['required'],
            select: ['required'],
        }
    }

    submit() {
    }

}

let app = new Vue({
    el        : '#app',
    template: `
        <v-form :form="form">
            <v-input v-model="form.name" :error="form.validator.getError('name')">
                Name:
            </v-input>
            <v-input v-model="form.email" type="email" :error="form.validator.getError('email')" placeholder="email@example.com">
                Email:
            </v-input>
            <v-input v-model="form.num" :error="form.validator.getError('num')"  type="number">
                Number:
            </v-input>
            <v-checkbox v-model="form.bool" :error="form.validator.getError('bool')">
                Check this box!
            </v-checkbox>
            <v-select v-model="form.select" :options="selectOptions" :error="form.validator.getError('select')">
                Select
            </v-select>
        </v-form>
    `,
    data: {
        form: new MyForm(),
        selectOptions: ['one', 'two', 'three'],
    },

    components: { ...VuetifulForms }
});
