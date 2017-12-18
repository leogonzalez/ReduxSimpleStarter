import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';

class WeatherList extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map((c) => {return c.main.temp-273});
    const pressures = cityData.list.map((c) => {return c.main.pressure});
    const humidities = cityData.list.map((c) => {return c.main.humidity});

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name} </td>
        <td><Chart data={temps} color='orange' /></td>
        <td><Chart data={pressures} color='green' /></td>
        <td><Chart data={humidities} color='black' /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
