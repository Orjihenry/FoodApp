import { View, FlatList } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={({ id }) => String(id)}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 10 }}
        columnWrapperStyle={{ gap: 5 }}
      />
  );
}
