import React, { useEffect, useState } from 'react';

import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';

//import { formatPrice } from '../../utils/format';
import { Container } from './styles';
import api from '../../services/api';

import ListProducts from '../../components/ListProducts';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get('/products');
      const format = data.map(product => ({
        ...product,
        priceFormatted: product.price,
        loading: false,
      }));

      setProducts(format);
    }
    load();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        centerComponent={{ text: 'Products', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ListProducts products={products} />
    </SafeAreaView>
  );
}
