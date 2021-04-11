import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from 'react-native-svg'
import star from '../../../../../assets/star'
import open from '../../../../../assets/open'
import { Spacer } from "../../../spacer/spacer.component";


const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`

const Open = styled(SvgXml)`
  flex-direction: row;
  padding-right: ${(props) => props.theme.space[2]};
`

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some names",
    // icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png',
    photos = [
      "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
    ],
    address = "100 some address",
    isOpenNow = true,
    rating = 4,
    isCloasedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
      
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => <SvgXml key={index} xml={star} width={20} height={20}/>)}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="large"/>
            {isCloasedTemporarily && (
              <Text variant="label" style={{color: 'red'}}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="right" size="large"/>
            {isOpenNow && <Open xml={open} width={20} height={20}/>}
            {/* <Image style={{width: 15}} source={{uri: icon}}/> */}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
