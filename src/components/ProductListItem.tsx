import Colors from '@constants/Colors';
import { Product } from '@src/types';
import { StyleSheet, Text, View, Image} from 'react-native';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
  };
  
const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product)
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultImage }} style={styles.image}
        resizeMode="contain" />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> Price: ${product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    // color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  price: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  }
});
