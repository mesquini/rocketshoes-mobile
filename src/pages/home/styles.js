import styled from 'styled-components/native';
import colors from '../../styles/colors';

import { RectButton } from 'react-native-gesture-handler';

export const ListProduct = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 60px 10px 2px 10px;
  background: #fff;
  border-radius: 4px;
`;
export const Product = styled.View`
  align-items: flex-start;
  margin: 15px 15px 20px;
`;
export const Photo = styled.Image`
  width: 64px;
  height: 64px;
  background: #eee;
  margin-right: 10px;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
export const Price = styled.Text`
  text-align: right;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;
export const Span = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  line-height: 25px;
  color: #fff;
`;

export const AddCartButton = styled(RectButton)`
  flex-direction: row;
  margin-top: 5px;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 36px;
`;
export const AddCartButtonText = styled.Text`
  flex: 1;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  text-transform: uppercase;
`;

export const Container = styled.View`
  background: ${colors.dark};
`;

export const ButtonIconValue = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 15px;
  max-width: 150px;
`;
