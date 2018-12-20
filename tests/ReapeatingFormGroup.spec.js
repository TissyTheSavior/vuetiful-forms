import expect             from 'expect';
import { mount }          from '@vue/test-utils';
import RepeatingFormGroup from "../src/components/RepeatingFormGroup";

describe('Repeating Form Group', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(RepeatingFormGroup, {
            propsData: { items: [{ name: 'foobar' }] }
        });
    });

    it('by default the delete button shows', () => {
        let deleteButton = wrapper.find('.vuetiful-forms-delete-item-button');

        expect(deleteButton.exists()).toBeTruthy();

    });

    it('when the add button is clicked it emits an add-item event', () => {
        wrapper.find('.vuetiful-forms-add-item-button').trigger('click');

        expect(wrapper.emitted()['add-item']).toBeTruthy();
    });



});