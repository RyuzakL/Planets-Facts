import App from '../../App.vue';
import Container from '../../components/Container.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
  test("le dropdownMenu doit s'afficher quand on clique sur l'hamburger", () => {
    const wrapper = mount(Container);
    // console.log(wrapper.html());
    // const hamburger = wrapper.find('[data-testid="hamburger-icon"]');

    // hamburger.trigger('click');
    // console.log('After Click', wrapper.html());
  });
});
