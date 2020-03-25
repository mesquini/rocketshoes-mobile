import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';
import { AppRegistry, TouchableOpacity, Alert, Image } from 'react-native';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper style={{ marginVertical: 10 }}>
      <Container style={{ marginVertical: 5 }}>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);

AppRegistry.registerComponent('Header', () => Header);
