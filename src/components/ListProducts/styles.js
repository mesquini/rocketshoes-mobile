import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ListProduct = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
export const Product = styled.View`
  align-items: flex-start;
  margin: 0 20px 30px;
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
`;
export const Price = styled.Text`
  text-align: right;
  font-size: 16px;
`;

export const AddCartButton = styled(RectButton)`
  margin-top: 5px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
export const AddCartButtonText = styled.Text`
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  text-transform: uppercase;
`;
