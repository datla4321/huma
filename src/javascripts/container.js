import React from 'react'
//import Header from 'javascripts/header'
import AddService from 'javascripts/addservice'
//import Footer from 'javascripts/footer'

//import 'stylesheets/modules/container'

const Container = React.createClass({
  render () {
    return (
      <div className='container'>
        {/*<ListServices/>*/}
        <AddService />
      </div>
    )
  }
})

export default Container
