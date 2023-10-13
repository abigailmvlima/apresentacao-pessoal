import svg from 'assets/svg';
import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  font-size: 190px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 15px;
`;

export const ButtonBack = styled.div`
  display: flex;
  background-color: #713262;
  position: absolute;
  left: -5.6%;
  bottom: 0px;
`;

export const Body = styled.div`
  display: flex;
  margin: 25px 5%;
  flex-direction: row;
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 1px;
`;

export const MeAbout = styled(svg.MeAbout)`
  display: flex;
  width: 100%;
`;

export const BaseTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyTitle = styled(svg.Hello)`
  display: flex;
  margin: 0 15px 15px 15px;
`;

export const TitleFullStack = styled(svg.TitleFullStack)`
  display: flex;
  width: 50%;
  margin: 15px 0;
`;

export const PhotoBS = styled(svg.PhotoBS)`
  display: flex;
  width: 60%;
`;

export const Title = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  color: #9d9d9d;
  width: 70%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpdateBase = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid #aaaaaa;
  padding: 4px 20px;

  position: absolute;
  bottom: 5%;
`;

export const UpdateTitle = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  color: #9d9d9d;
  margin: 4px;
`;

export const UpdateValue = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  color: #9d9d9d;
  margin: 4px;
`;

export const MapBase = styled.div`
  display: flex;
  background-color: aqua;
`;

export const Description = styled.div`
  display: flex;
  font-size: 25px;
  text-align: justify;
`;

export const BaseIcon = styled.div`
  display: flex;
  font-size: 25px;
  text-align: justify;
  width: 100%;
  justify-content: space-between;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aqua;
`;

export const IconTitle = styled.div`
  display: flex;
`;

export const IconValue = styled.div`
  display: flex;
`;
