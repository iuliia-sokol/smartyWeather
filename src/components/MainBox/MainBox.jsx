import { ChartsUI } from 'components/ChartBox/Charts';
import { WeatherUI } from 'components/WeatherBox/WeatherBox';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCityName,
  getCountry,
  getCurrentWeather,
  getDayTime,
  getForcast,
} from 'redux/location/locSelectors';
import { conditionsWeatherApi } from 'utils/conditionsWeatherApi';
import {
  ChanceOfIndicator,
  CityName,
  DataWrapper,
  FeelsLike,
  IconWrapper,
  Indicator,
  IndicatorsWrapper,
  Temperature,
  TemperatureWrapper,
  WeatherConditions,
  WeatherDataWrapper,
  WeatherInfoWrapper,
} from './MainBox.styled';

import termometrPlus from '../../images/thermomater-max-min.png';
import termometrMinus from '../../images/thermomater-min-min.png';
import percipitationImg from '../../images/percipitation-min.png';
import windImg from '../../images/wind-min.png';
import humidityImg from '../../images/humidity-min.png';
import rain from '../../images/rain-min.png';
import snow from '../../images/snow-min.png';

export const MainBoxUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
  const forecast = useSelector(getForcast);
  const dayTime = useSelector(getDayTime);
  const city = useSelector(getCityName);
  const country = useSelector(getCountry);

  //   console.log(forecast[0].day.daily_chance_of_rain);

  const [showWeather, setShowWeather] = useState(false);
  const [weatherPng, setWeatherPng] = useState(null);

  useEffect(() => {
    if (extraWeather) {
      const weatherCode = extraWeather.condition.code;
      const conditionPng = conditionsWeatherApi.find(
        cond => cond.code === weatherCode
      ).png;
      dayTime ? setWeatherPng(conditionPng[0]) : setWeatherPng(conditionPng[1]);
    }
  }, [dayTime, extraWeather]);

  const onWeatherBtnClick = () => {
    setShowWeather(!showWeather);
  };

  return (
    <DataWrapper>
      {weather && extraWeather ? (
        <>
          <WeatherDataWrapper>
            <IconWrapper>
              <img
                src={weatherPng}
                alt={extraWeather.condition.text}
                loading="lazy"
              />
            </IconWrapper>

            <TemperatureWrapper>
              <WeatherConditions>
                <span>{extraWeather.condition.text}</span>
              </WeatherConditions>
              <CityName>
                {city}, {country}
              </CityName>

              <Temperature>
                <img
                  src={
                    extraWeather.temp_c >= 0 ? termometrPlus : termometrMinus
                  }
                  alt="temperature"
                  loading="lazy"
                />
                {extraWeather.temp_c} <span>°C</span>
              </Temperature>

              <FeelsLike>Feels like {extraWeather.feelslike_c} °C</FeelsLike>
            </TemperatureWrapper>
          </WeatherDataWrapper>
          <WeatherInfoWrapper>
            <IndicatorsWrapper>
              <ChanceOfIndicator>
                <div>
                  <img src={rain} alt="rain" loading="lazy" />
                  <span>Chance of rain:</span>
                  <span>{forecast[0].day.daily_chance_of_rain} %</span>
                </div>
                <div>
                  <img src={snow} alt="snow" loading="lazy" />
                  <span>Chance of snow:</span>
                  <span>{forecast[0].day.daily_chance_of_snow} %</span>
                </div>
              </ChanceOfIndicator>
              <Indicator color="blue">
                <img
                  src={percipitationImg}
                  alt="percipitation"
                  loading="lazy"
                />
                <div>
                  <span>Precipitation:</span>
                  <br />
                  <span>{weather.daily.precipitation_sum[0]} mm</span>
                </div>
              </Indicator>
              <Indicator color="pink">
                <img src={humidityImg} alt="humidity" loading="lazy" />
                <div>
                  <span>Humidity:</span>
                  <br />
                  <span>{extraWeather.humidity} %</span>
                </div>
              </Indicator>
              <Indicator color="violet">
                <img src={windImg} alt="wind" loading="lazy" />
                <div>
                  <span>Windspeed:</span>
                  <br />
                  <span>{weather.current_weather.windspeed} km/h</span>
                </div>
              </Indicator>
            </IndicatorsWrapper>
            <ChartsUI />
            <button type="button" onClick={onWeatherBtnClick}>
              Display weather
            </button>
          </WeatherInfoWrapper>
          {showWeather && <WeatherUI />}
        </>
      ) : (
        <div>No data to display</div>
      )}
    </DataWrapper>
  );
};