import { Indicator } from 'components/Indicator/Indicator.styled';
import styled from 'styled-components';

export const DataWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 32px 16px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.63);
  box-shadow: -5px -5px 80px #fff, 5px 5px 20px #babecc;

  @media screen and (min-width: 768px) {
    padding: 32px 56px;
  }

  @media screen and (min-width: 1280px) {
    width: 70%;
  }
`;

export const WeatherDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  position: relative;
`;

export const WeatherInfoWrapper = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (min-width: 768px) {
    padding: 56px 32px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  top: -25%;
  left: -10%;
  position: absolute;

  & img {
    width: 100%;
  }

  @media screen and (min-width: 420px) {
    width: 170px;
  }

  @media screen and (min-width: 768px) {
    position: static;
    width: 30vw;
  }

  @media screen and (min-width: 1280px) {
    width: 40%;
  }
`;

export const CityName = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};
  z-index: 10;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const WeatherConditions = styled.div`
  padding: 10px;
  max-width: 50%;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.mainLight};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  background-color: ${p => p.theme.colors.mainAccentPink};
  border-radius: ${p => p.theme.radii.main};
`;

export const IndicatorsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: stretch;
  }
`;

export const ChanceOfIndicator = styled(Indicator)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.bgGrey};
  color: #8495b2;
  gap: 8px;

  & div {
    display: flex;
  }

  & img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
`;

export const FeelsLike = styled.span`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.textGrey};
`;
export const Temperature = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};

  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 96px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  & img {
    width: 40px;
  }

  & span {
    font-weight: ${p => p.theme.fontWeights[0]};
    font-size: 24px;
  }
`;

export const ButtonsWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 16px;

  & li {
    display: inline-flex;
    width: calc(50% - 16px);
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;

    & li {
      width: calc(100% / 3 - 32px);
    }
  }
`;
