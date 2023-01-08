import React, { Component } from 'react'
import '../HeroSection/HeroSection.css'
import SearchBox from '../SearchBox/SearchBox';

export class HeroSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      value: "",
    };
  }



  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then(response => response.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.Search,
          });
        }
        ,
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
  }


  handlecallback = (childData) => {
    this.setState({ value: childData })


    if (this.state.value === "") {
      this.setState({ items: this.state.items })
    } else {

      const filteredArray = this.state.items.filter((i) => {
        return (
          i.Title.toLowerCase().includes(this.state.value.toLowerCase())

        )
      })

      this.setState({ items: filteredArray })





    }

  }


    


  render() {

    const {
      error,
      isLoaded, items, value } = this.state;




    console.log(items)
    console.log(value)

    const containsErrorMessage = () => {
      return <div>Error:
        {error.message}
      </div>;
    };

    const isLoading = () => {
      return <div>Loading...</div>;
    };

    const results = () => {
      return (
        <>
          <SearchBox parentCallback={this.handlecallback} />


          <div className='Cards'>
            {
              items.map((item) => {

                return (
                  <div className='Card'
                    key={item.imdbID}

                  >
                    <div className='cardimg'><img src={item.Poster} alt=''></img></div>
                    <div className='movietitle'><p className='cardtitle'>{item.Title}</p></div>
                  </div>

                )

              })
            }

          </div>

        </>


      )


    }
    if (error) return containsErrorMessage();

    return !isLoaded ? isLoading() : results();

  }

}

export default HeroSection
