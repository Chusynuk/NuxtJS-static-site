import { mount } from '@vue/test-utils';
import WeAreHiring from '~/components/WeAreHiring.vue';

describe('WeAreHiring', () => {
  const wrapper = mount(WeAreHiring);

  it('should render TEAM text', () =>{
    expect(wrapper.contains('span')).toBe(true);
  });
});
