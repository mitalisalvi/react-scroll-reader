import React, { Component } from 'react'
import SidebarComp from './Components/SidebarComp'
import Content from './Components/Content'
import Breadcrumb from './Components/Breadcrumb'
class App extends Component {
  render() {
    return (
      <div>
          <div className="breadcrumb"><Breadcrumb /></div>
          <div className="app">
              <SidebarComp />
              <Content />
          </div>
      </div>
    )
  }
}
export default App