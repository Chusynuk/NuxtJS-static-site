import { mount } from '@vue/test-utils';
import HeadTitle from '~/components/HeadTitle.vue';

describe('HeadTitle', () => {
  const wrapper = mount(HeadTitle);

  it('should render TEAM text', () =>{
    expect(wrapper.html()).toContain('<div class="title"><span>TEAM</span></div>');
  });
});
