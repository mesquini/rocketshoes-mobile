import React from 'react';
import { View } from 'react-native';

import {
  ListProduct,
  Product,
  Photo,
  Title,
  Price,
  AddCartButton,
  AddCartButtonText,
} from './styles';

export default function ListProducts({ products }) {
  return (
    <ListProduct
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Product>
          <View style={{ flexDirection: 'row' }}>
            <Photo source={{ uri: item.image }} />
            <View style={{ flex: 1, alignItems: 'stretch' }}>
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
            </View>
          </View>
          <AddCartButton onPress={() => {}}>
            <AddCartButtonText>Adicionar</AddCartButtonText>
          </AddCartButton>
        </Product>
      )}
    />
  );
}
