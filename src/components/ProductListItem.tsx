import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image} from 'react-native';

const ProductListItem = ({ product }) => {
  console.log(product)
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

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
