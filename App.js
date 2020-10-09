import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <View
        style={{
          backgroundColor: 'gray',
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'orange',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}>
          <Text style={{ marginTop: 40, marginLeft: 3, fontWeight: 'bold' }}>
            Orange Circle
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'yellow',
            width: 100,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{ marginTop: 15, marginLeft: 13 }}>Yellow Box</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'pink',
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              backgroundColor: 'black',
              width: 230,
              height: '90%',
              marginLeft: 20,
              marginVertical: 20,
              borderRadius: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Black Box
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'brown',
              width: 60,
              height: '90%',
              marginVertical: 20,
              marginRight: 20,
              borderRadius: 40,
            }}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  transform: [{ rotate: '270deg' }],
                }}>
                Brown Box
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
