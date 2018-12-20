import expect       from 'expect';
import { mount }    from '@vue/test-utils';
import VuetifulForm from '../src/components/VuetifulForm';
import { Form }     from 'form-guard';

describe('Vuetiful Form', () => {

    it('when the form is submitted it emits a startSubmit event', () => {
        let wrapper = mount(VuetifulForm);

        wrapper.setProps({ form: new MockForm() });

        wrapper.find('form').trigger('submit');

        expect(wrapper.emitted().startSubmit).toBeTruthy();
    });

    it('when the form submits successfully it emits a success event', () => {
        let wrapper = mount(VuetifulForm);

        wrapper.setProps({ form: new MockForm() });

        wrapper.find('form').trigger('submit');

        expect(wrapper.emitted().success).toBeTruthy();
        expect(wrapper.emitted().success[0][0]).toBe('success!');
    });

});

class MockForm extends Form {

    submit() {
        return 'success!';
    }

}