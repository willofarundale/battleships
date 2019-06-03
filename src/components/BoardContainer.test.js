import React from 'react';
import { shallow, mount} from 'enzyme';
import BoardContainer from './BoardContainer';

//Board Container Renders
describe('BoardContainer', () => {
  it('Renders', () => {
    const wrapper = shallow(<BoardContainer />);
  
    expect(wrapper.exists()).toBe(true);
  });
});