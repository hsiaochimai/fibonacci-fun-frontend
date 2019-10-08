import React from 'react';
import TestRenderer from 'react-test-renderer';

import FibNumber from './FibNumber';
it('render correctly FibNumber component', () => {  
    const FibNumberComponent = TestRenderer.create(<FibNumber />).toJSON();
    expect(FibNumberComponent).toMatchSnapshot();
});

