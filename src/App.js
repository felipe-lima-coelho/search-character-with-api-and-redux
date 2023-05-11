import React, { Component } from 'react';
import Loading from './components/Loading';

class App extends Component {
  state = {
    isLoading: false,
    fetched: false,
  };

  render() {
    const { isLoading, fetched } = this.state;

    if (isLoading) return <Loading />;
    return (
      <>
        <main>
          <form>
            <label htmlFor="input-search">
              Search Game Of Thrones character:
              <input
                type="text"
                name="input-search"
                id="input-search"
                placeholder="Ex.: Tyrion Lannister"
              />
            </label>
            <button>Search</button>
          </form>

          {
            fetched && (
              <section>
                <p><strong>Name:</strong></p>
                <p><strong>Born:</strong></p>
                <p><strong>Titles:</strong></p>
                <p><strong>Aliases:</strong></p>
                <p><strong>Tv Series:</strong></p>
                <p><strong>Played By:</strong></p>
              </section>
            )
          }
        </main>
      </>
    );
  }
};

export default App;
