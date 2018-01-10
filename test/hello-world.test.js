const React = require('react')
const {assert} = require('chai')
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

const {shallow} = enzyme;

import HelloWorld from '../src/HelloWorld'

const Room = (props) => {
  return (
    <h1>
      HEY WHATS UP YOU STINK I AM THE {props.name}
      <h2>GO AWAY!!!</h2>
    </h1>
  )
}

const House = () => {
  return (
    <React.Fragment>
      <Room name="Living Room"/>
      <Room name="Kitchen"/>
      <Room name="Study"/>
    </React.Fragment>
  )
}

describe('<Room>', () => {
  it('is a jerk', () => {
    const wrapper = shallow(<Room name="Bedroom"/>)
    assert.equal(wrapper.text(), "HEY WHATS UP YOU STINK I AM THE BedroomGO AWAY!!!")
  })
})

describe('<House>', () => {
  it('contains many rooms', () => {
    const wrapper = shallow(<House/>)
    assert.equal(wrapper.find(Room).length, 3)
  })
})

describe('test harness is set up', () => {
 it('works', () => {
   assert.isTrue(true)
 })
})

describe('<HelloWorld>', () => {
  it('says goodbye when you click on it', () => {
    const wrapper = shallow(<HelloWorld/>)
    wrapper.simulate('click')
    assert.equal(wrapper.text(), 'Goodbye World')
  })

  it('says hello to a specific person', () => {
    const wrapper = shallow(<HelloWorld to="Cielle"/>)
    assert.equal(wrapper.text(), 'Hello Cielle')
  })

  it('says hello to the world', () => {
    const wrapper = shallow(<HelloWorld/>)
    assert.equal(wrapper.find('h1').length, 1)
    assert.equal(wrapper.text(), 'Hello World')
  })
})
