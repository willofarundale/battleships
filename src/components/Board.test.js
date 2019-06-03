import React from 'react';
import { shallow, mount} from 'enzyme';
import Board from './Board';

//Board Renders
describe('Board', () => {
  it('Renders', () => {
    const wrapper = shallow(<Board />);
  
    expect(wrapper.exists()).toBe(true);
  });
});


