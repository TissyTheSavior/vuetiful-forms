import expect    from 'expect';
import { mount } from 'vue-test-utils';
import Error     from '../src/components/Error';

describe('Error Component Test', () => {

    it('displays the error when it is set', () => {
        let component = mount(Error);

        expect(component.find('.error').exists()).toBeFalsy();

        component.setProps({ error: "Error!" });

        expect(component.find('.error').exists()).toBeTruthy();
        expect(component.find('.error').text()).toBe("Error!");

    });

});