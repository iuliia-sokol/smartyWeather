import styled from 'styled-components';

export const Form = styled.form`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 32px 16px;
  background: rgba(255, 255, 255, 0.33);
  border-radius: 30px;
  margin: 0 auto;
  margin-bottom: 56px;
  gap: 32px;
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};

  @media screen and (min-width: 768px) {
    padding: 32px 56px;
  }

  @media screen and (min-width: 1280px) {
    width: 70%;
  }
`;

export const PlacesAutocomplete = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const InputWrap = styled.div`
  max-width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const InputError = styled.span`
  background: #ff00002e;
  border-radius: 20px;
  display: inline-block;
  font-size: 14px;
  margin-left: 4px;
  padding: 8px;
`;

export const Input = styled.input`
  border-radius: 16px;
  margin-bottom: 8px;
  border: none;
  box-sizing: border-box;
  display: block;
  height: 42px;
  padding: 12px 16px;
  width: 100%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.63);
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DataList = styled.ul`
  border-radius: 16px;
  max-height: 30vh;
  max-width: 100%;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.63);

  /* ::-webkit-scrollbar {
    width: 10px;

    overflow: hidden;
  }

  ::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.bgGrey};
    border-radius: 30px;
    max-height: 90%;
    background-image: url('https://www.transparenttextures.com/patterns/black-paper.png');
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.textGrey};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8bba98;
  } */
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  max-width: 100%;
`;

export const PlacesAutocompleteHint = styled.span`
  display: inline-block;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const CityName = styled.span``;
