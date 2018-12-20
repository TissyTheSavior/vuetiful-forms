import expect        from 'expect';
import { mount }     from '@vue/test-utils';
import VuetifulInput from "../src/components/VuetifulInput";

describe('Text Box Component Test', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(VuetifulInput, {
            propsData: {
                value: '',
            }

        });
    });

    it('changes the value as it is typed into', () => {
        wrapper.find('')
    });

});