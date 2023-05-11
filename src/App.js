import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './components/Loading';
import { connect } from 'react-redux';
import { fetchCharacterInfo } from './Redux/actions';

class App extends Component {
  state = {
    name: '',
  };

  onChangeInputText = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onClickSearchCharacter = () => {
    const { name } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchCharacterInfo(name));
  };

  render() {
    const {
      name,
      born,
      titles,
      aliases,
      tvSeries,
      playedBy,
      isLoading,
      fetched,
      errorMessage,
    } = this.props;

    return (
      <>
        <main>
          <form>
            <label htmlFor="input-search">
              Search Game Of Thrones character:
              <input
                type="text"
                name="name"
                id="input-search"
                placeholder="Ex.: Tyrion Lannister"
                onChange={ this.onChangeInputText }
              />
            </label>
            <button
              type="button"
              onClick={ this.onClickSearchCharacter }
            >
              Search
            </button>
          </form>

          { isLoading && <Loading />}

          {
            fetched && (
              <section>
                <p><strong>Name:</strong>{' '}{name}</p>
                <p><strong>Born:</strong>{' '}{born}</p>
                <div>
                  <strong>Titles:</strong>
                  <ul>
                    { titles.map((title) => (
                      <li key={title}>{ title }</li>
                    )) }
                  </ul>
                </div>
                <div>
                  <strong>Aliases:</strong>
                  <ul>
                    { aliases.map((aliase) => (
                      <li key={aliase}>{ aliase }</li>
                    )) }
                  </ul>
                </div>
                <div>
                  <strong>Tv Series:</strong>
                  <ul>
                    { tvSeries.map((tvSerie) => (
                      <li key={tvSerie}>{ tvSerie }</li>
                    )) }
                  </ul>
                </div>
                <div>
                  <strong>Played By:</strong>
                  <ul>
                    { playedBy.map((played) => (
                      <li key={played}>{ played }</li>
                    )) }
                  </ul>
                </div>
              </section>
            )
          }

          {
            errorMessage && <strong>{ errorMessage }</strong>
          }
        </main>
      </>
    );
  }
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  born: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  aliases: PropTypes.array.isRequired,
  tvSeries: PropTypes.array.isRequired,
  playedBy: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = ({ characterReducer }) => ({
  name: characterReducer.name,
  born: characterReducer.born,
  titles: characterReducer.titles,
  aliases: characterReducer.aliases,
  tvSeries: characterReducer.tvSeries,
  playedBy: characterReducer.playedBy,
  isLoading: characterReducer.isLoading,
  fetched: characterReducer.fetched,
  errorMessage: characterReducer.errorMessage,
});

export default connect(mapStateToProps)(App);
