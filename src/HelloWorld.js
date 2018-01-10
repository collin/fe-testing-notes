import React from 'react'

class HelloWorld extends React.Component {
  constructor () {
    super()
    this.state = {
      greeting: true,
    }
  }
  render () {
    const target = this.props.to || 'World'
    const salutation = this.state.greeting ? 'Hello' : 'Goodbye'
    return (
      <h1
        onClick={() => {
          this.setState(state => {
            return { greeting: !state.greeting }
          })
        }}
      >
        {salutation} {target}
      </h1>
    )
  }
}

export default HelloWorld
