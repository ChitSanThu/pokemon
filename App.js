import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, StatusBar, Dimensions, FlatList } from 'react-native';
import Cart from './assets/svg/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './assets/svg/Logo';
import Modal from "react-native-modal";
import Close from './assets/svg/Close';
import { useEffect, useState } from 'react';
import request from './api/axios';
import Search from './assets/svg/Search';
import UpArrow from './assets/svg/UpArrow';
import DownArrow from './assets/svg/DownArrow';
import UpArrowDis from './assets/svg/UpArrowDis';
import Cross from './assets/svg/Cross';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [showCartModal, setShowCartModal] = useState(false)
  const [cards, setCards] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [selectedCards, setSelectedCards] = useState([])

  useEffect(() => {
    request.get(`/cards?page=${pageNo}&pageSize=3&select=id,name,set,rarity,images,cardmarket`).then((res) => {
      setCards([...cards, ...res.data.data])
    }).catch(error => console.log(error))
  }, [pageNo])
  return (
    <View style={styles.container}>
      <SafeAreaView style={{
        backgroundColor: "#fff",
        width: "100%",
        height: Platform.OS === "ios" ? 100 : 60,
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        // marginBottom: Platform.OS === "ios" ? 0 : 8,

      }}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#1D1C1C' }}>TCG Marketplace</Text>
          <View style={{ position: 'relative', bottom: -10, backgroundColor: "red"}}>
            <Logo />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />

      <ShowCartPopup showCartModal={showCartModal} setShowCartModal={setShowCartModal} selectedCards={selectedCards} />

      <View style={styles.footer_background}>

        <TouchableOpacity style={styles.view_card_btn} onPress={() => setShowCartModal(true)}>
          <Cart />
          <Text style={styles.view_btn_text}>View Card</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, marginBottom: 20,zIndex:0 }}>
        <FlatList
          data={cards}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={
            ({ item, index }) =>
            (<View style={{ marginTop: 300, marginBottom: index == cards.length - 1 ? 50 : 0 }}>

              <View style={styles.card}>
                <Image style={styles.card_image} source={{ uri: item.images.small }} />
                <Text style={styles.card_title}>{item.name}</Text>
                <Text style={styles.card_image_type}> {item.rarity}</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                  <Text style={styles.card_image_des}>${item.cardmarket.prices.trendPrice}</Text>
                  <Text style={styles.card_image_des}> {item.set.total} left</Text>
                </View>
                <CustomBtn selectedCards={selectedCards} setSelectedCards={setSelectedCards} card={item} />
              </View>
            </View>
            )
          }
          onEndReached={() => {
            setPageNo((previousPage) => previousPage + 1)
          }}
          ListFooterComponent={() => (
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 100 }}>
              <Search />
              <Text style={{ fontSize: 16, fontWeight: '500', color: "#6A6969" }}>show more</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  )
}

const CustomBtn = ({ selectedCards, setSelectedCards, card }) => {
  const [toggele, setToggle] = useState(false)
  const addCard = (item) => {
    setSelectedCards(prevCards => [...prevCards, item])
  }
  const reomoveCard = (item) => {
    setSelectedCards(prevCards => prevCards.filter(card => card.id !== item.id))
  }
  return (
    <TouchableOpacity style={{
      minWidth: 217.23,
      backgroundColor: toggele ? '#1D1C1C' : '#FDCE29',
      borderRadius: 25,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 18
    }}
      onPress={() => {
        toggele ? reomoveCard(card) : addCard(card);
        setToggle((prev) => !prev);
      }}
    >
      <Text style={{
        fontSize: 20,
        fontWeight: '500',
        color: toggele ? '#fff' : '#1D1C1C'
      }}>{toggele ? 'Selected' : 'Select card'}</Text>
    </TouchableOpacity>
  )
}

const CartItem = ({ item }) => {
  const [count, setCount] = useState(1)
  return (
    <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
      <View >
        <Image style={{ width: 77, height: 106 }} source={{ uri: item.images.small }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, width: '75%', paddingHorizontal: 20 }}>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#1D1C1C' }}>{item.name}</Text>

            <Text style={{ fontSize: 12, fontWeight: '400', color: '#1D1C1C' }} >${item.cardmarket.prices.trendPrice}<Text style={{ color: '#6A6969' }}> per card</Text></Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#FD2929' }}>{item.set.total} <Text style={{ fontWeight: '400', color: '#BCBBBB' }}>cards left</Text></Text>
        </View>

        <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'flex-end', paddingLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#298BFD', paddingTop: 8 }}>{count}</Text>
            <View style={{ gap: 10 }}>
              {
                count == item.set.total ?
                  <UpArrowDis /> :
                  <TouchableOpacity onPress={() => setCount(prevCount => prevCount + 1)}>
                    <UpArrow />
                  </TouchableOpacity>
              }
              {
                count == 1 ?
                  <Cross /> :
                  <TouchableOpacity onPress={() => setCount(prevCount => prevCount - 1)}>
                    <DownArrow />
                  </TouchableOpacity>
              }
            </View>
          </View>

          <View style={{ alignItems: 'flex-end' }}>

            <Text style={{ fontSize: 12, fontWeight: '500', color: '#1D1C1C', paddingBottom: 7 }}>price</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#298BFD' }}>${(count * item.cardmarket.prices.trendPrice).toFixed(2)}</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

const ShowCartPopup = ({ showCartModal, setShowCartModal, selectedCards ,setTotalCard,setTotal}) => {

  return (
    <View>
      <Modal isVisible={showCartModal} backdropOpacity={0} >
        <View style={{ position: 'absolute', bottom: 23, alignItems: "center", backgroundColor: "#fff", borderRadius: 20, height: 613, width: "100%", paddingVertical: 30 }}>
          <View style={{ flex: 1 }}>
            {
              selectedCards.length ?
                <FlatList
                  data={selectedCards}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={
                    ({ item, index }) => (

                      <CartItem item={item}   />
                    )}
                /> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>No Cards!</Text>
                </View>
            }
          </View>

          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '400', color: '#6A6969', textDecorationLine: 'underline', paddingVertical: 10 }} >Clear all</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#1D1C1C' }}>Total cards</Text>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#FD2929' }}>7</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#1D1C1C' }}>Total price</Text>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#FD2929' }}>$19.97</Text>
            </View>
            <TouchableOpacity style={styles.btn} >
              <Text style={styles.btn_text}>Pay now</Text>
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', bottom: -30, justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => setShowCartModal(false)}>

              <Close />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  card: {
    width: 294,
    height: 204,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.03)"
  },
  card_image: {
    width: 194.37,
    height: 271.13,
    marginTop: -200
  },
  card_title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1D1C1C',
    lineHeight: 37.5
  },
  card_image_type: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0F6DB0',
    lineHeight: 24

  },
  card_image_des: {
    fontSize: 20,
    fontWeight: '400',
    color: '#6A6969',
    lineHeight: 30
  },
  btn: {
    minWidth: 217.23,
    backgroundColor: "#FDCE29",
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 18
  },
  btn_text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1D1C1C'
  },
  footer_background: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    // backgroundColor:'red',
    zIndex: 2,
    backgroundImage: 'linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #F8F8F8 100%);'
  },
  view_card_btn: {
    flexDirection: 'row',
    gap: 5,
    width: 102,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#298BFD",
  },
  view_btn_text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  }
});
export default App;