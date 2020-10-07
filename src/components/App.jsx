import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Quoteblock from './quoteblock';
import About from './about';
import Swapsec from './swapsec';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Quoteblock data={this.state.resumeData.Quoteblock}/>
        <About  data={this.state.resumeData.About}/>
        <Swapsec  data={this.state.resumeData.Swapsec}/>
        <Gallery />
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
