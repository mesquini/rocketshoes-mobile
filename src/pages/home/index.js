import React, { useEffect, useState } from 'react';
import { View, AppRegistry } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ListProduct,
  Product,
  Photo,
  Title,
  Price,
  AddCartButton,
  AddCartButtonText,
  Span,
  ButtonIconValue,
} from './styles';

import { currencyFormat } from '../../utils/format';

import api from '../../services/api';

function Home({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get('/products');
      const format = data.map(product => ({
        ...product,
        priceFormatted: currencyFormat(product.price),
      }));
      setProducts(format);
    }
    load();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);
  }

  return (
    <Container>
      <ListProduct
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Product>
            <View style={{ flexDirection: 'row' }}>
              <Photo source={{ uri: item.image }} />
              <View style={{ flex: 1, alignItems: 'stretch' }}>
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
              </View>
            </View>
            <AddCartButton onPress={() => handleAddProduct(item.id)}>
              <ButtonIconValue>
                <Icon name="add-shopping-cart" size={24} color="#fff" />
                <Span>{amount[item.id] || 0}</Span>
              </ButtonIconValue>
              <AddCartButtonText>Adicionar</AddCartButtonText>
            </AddCartButton>
          </Product>
        )}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

AppRegistry.registerComponent('Home', () => Home);
