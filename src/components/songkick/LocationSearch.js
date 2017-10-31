import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../modules/actions/actions'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

class LocationSearch extends Component {
    componentWillMount() {
        this.props.actions.fetchLocationSearch();
    }

    renderData() {
        return (
            <div>
            <div> Country Name: {this.props.resultspage.results.location[0].city.country.displayName}   </div>
            <div> City Name: {this.props.resultspage.results.location[0].city.displayName}   </div>
            <div> Latitude: {this.props.resultspage.results.location[0].city.lat}   </div>
            <div> Longitude: {this.props.resultspage.results.location[0].city.lng}   </div>
          </div>
        )
    }

    render() {
        return (
            <div className="container">
            <hr />
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" 
                  onChange={event => { this.setState({ query: event.target.value }) }}
                className="form-control" placeholder="Search for a location..." />
                <span className="input-group-btn">
                  <button 
                  onClick={()=> this.renderData()}
                   className="btn btn-default" type="button">Search!</button>
                </span>
              </div>
            </div>
            <hr />
            </div>
        )
    }
}

LocationSearch.propTypes = {
    actions: PropTypes.object,
    state: PropTypes.array
}

function mapStateToProps(state){
    return {
        state: state.state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationSearch)