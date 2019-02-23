import { mount } from '@vue/test-utils';
import TeamMember from '~/components/TeamMember.vue';

describe('TeamMember', () => {
  const wrapper = mount(TeamMember, {
    propsData: {
      image: 'https://loremflickr.com/640/480/dog',
      location: 'Barcelona',
      jobPosition: 'Developer',
      hashtags: ['es6', 'vue']
    }
  });

  it('should render team member props', () => {
    expect(wrapper.props().image).toMatch('https://loremflickr.com/640/480/dog');
    expect(wrapper.props().location).toMatch('Barcelona');
    expect(wrapper.props().jobPosition).toMatch('Developer');
    expect(wrapper.props().hashtags).toEqual(['es6', 'vue']);
  });
});

// DIFERENT ESTRUCTURE

// describe('TeamMember', () => {
//   it('should render team member props', () => {
//       const image = 'https://loremflickr.com/640/480/dog'
//       const location = 'Barcelona'
//       const jobPosition = 'Developer'
//       const hashtags = ['happy', 'sunny']
//       const wrapper = mount(TeamMember, {
//       propsData: {
//         image,
//         location,
//         jobPosition,
//         hashtags
//       }
//     })
//     expect(wrapper.props().image).toMatch('https://loremflickr.com/640/480/dog')
//     expect(wrapper.props().location).toMatch('Barcelona')
//     expect(wrapper.props().jobPosition).toMatch('Developer')
//     expect(wrapper.props().hashtags).toEqual(['happy', 'sunny'])
//   })
// })
