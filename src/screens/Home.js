
// import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// export default function Home() {

//   const [input, setInput] = useState('')
//   const [data, setData] = useState([])
//   const [show, setShow] = useState(false)

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = async () => {
//     try{
//       const storedData = await AsyncStorage.getItem ('data')
//       if (storedData !== null) {
//         setData(JSON.parse(storedData))
//       }
//     } catch (error) {
//       console.error('error retriving data:', error)
//     }
//   }

//   const tambahData = () => {
//     const newData = [...data, input]
//     setData(newData)
//     setInput('')
//     console.log(newData)
//     setShow(true)
//   }

//   const hapusData = index => {
//     const newData = [...data]
//     newData.splice(index, 1)
//     setData(newData)
//     console.log(newData)
//     setShow(true)
//   }

//   const simpanData = async () => {
//     try {
//       await AsyncStorage.setItem('data', JSON.stringify(data))
//       console.log('data saved successfully')
//       setShow(false)
//       ToastAndroid.show('data saved successfully',
//       ToastAndroid.SHORT)
//     } catch (error) {
//       console.error('Error saving data')
//     }
//   }
  
//   return (
//     <View style = {{flex:1}}>

//       {/* HEADER */}
//       <View style = {styles.header}>
//       <Text style = {{color : 'white', fonteight : 'bold', fontSize: 20}}>
//         Home
//         </Text>
//         </View>
   
//     {/*CONTENT*/}
//     <ScrollView>
//       {data.map ((value,index) => {
//         return (
//           <View style = {{flexDirection : 'row', minHeight: 50, marginVertical:10}}>
//             <View style = {{width: '5%', backGroundColor: 'red'}}></View>
//             <View style = {{width: '80%', justifyContent: 'center', backGroudColor: 'white', padding: '5'}}>
//             <Text>{value}</Text>
//             </View>
          

//           <TouchableOpacity style={{
//             width: '15%',
//             backgroundColor: 'red',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//           onPress={() => hapusData(index)}> 
//           <Text style={{color: 'white'}}>Hapus</Text>

//           </TouchableOpacity>
//           </View>
//         )
//         })}
//     </ScrollView>
    
//     {/* INPUT */}
// <View
//   style={{
//     flexDirection: 'row',
//     backgroundColor: 'deepskyblue',
//     height: 50,
//   }}>
//   {/* STYLE INPUT */}
//   <View style={{width: '80%', backgroundColor: 'white'}}>
//     <TextInput placeholder="ketikkan pesan"
//     value={input}
//     onChangeText={text => setInput(text)}
//     />
//   </View>
//   {/* TOMBOL KIRIM */}
//   <TouchableOpacity style={styles.kirim}
//   onPress={() => tambahData()}>
//     <Text>Kirim</Text>
//   </TouchableOpacity>
//   </View>


//   {/* Simpan Data */}
//   {show ? <TouchableOpacity
//    onPress={() => {
//      simpanData();
//    }}
//    style={styles.simpan}>
//    <Text style={{color: 'white'}} />
//  </TouchableOpacity>: false}
// </View>
// )
// }

// const styles = StyleSheet.create({
// header: {
// height: 50,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: 'deepskyblue',
// },
// kirim: {
// width: '20%',
// justifyContent: 'center',
// alignItems: 'center',
// },
// simpan: {
//   position: 'absolute',
//   bottom: 75,
//   right: 25,
//   backgroundColor: 'deepskyBlue',
//   padding: 10,
//   borderRadius: 30,
// },

// })
  

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  // State (Keadaan)
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const tambahData = () => {
    const newData = [...data, input];
    setData(newData);
    setInput('');
    console.log(newData);
    setShow(true);
  };

  const hapusData = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    console.log(newData);
    setShow(true);
  };

  const simpanData = async () => {
    try { 
      await AsyncStorage.setItem('data', JSON.stringify(data));
      console.log('Data saved successfully.');
      setShow(false)
      ToastAndroid.show('Data saved successfully.', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Home
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView>
        {data.map((isi, urutan) => {
          return (
            <View style={styles.listBox} key={urutan}>
              <View style={{width: '5%', backgroundColor: 'red'}} />

              <View style={styles.catatan}>
                <Text style={{color: 'black'}}>{isi}</Text>
              </View>

              <TouchableOpacity
                style={styles.hapus}
                onPress={() => hapusData(urutan)}>
                <Icon name="trash" size={20} style={{color: 'white'}} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* INPUT */}
      <View style={styles.boxInput}>

        {/* STYLE INPUT */}
        <View style={{width: '80%', backgroundColor: 'white'}}>
          <TextInput
            placeholder="ketikkan pesan"
            value={input}
            onChangeText={text => setInput(text)}
          />
        </View>

        {/* TOMBOL KIRIM */}
        <TouchableOpacity style={styles.kirim} onPress={tambahData}>
         <Icon name="send" size={20} style={{color: 'white'}} />
        </TouchableOpacity>
      </View>

      {/* Simpan Data */}
      {show ? <TouchableOpacity
        onPress={() => {
          simpanData();
        }}
        style={styles.simpan}>
        <Icon name="check-circle" size={30} style={{color: 'white'}} />
      </TouchableOpacity>: false}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    elevation: 5,
  },
  kirim: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    flexDirection: 'row',
    minHeight: 50,
    marginVertical: 10,
  },
  boxInput: {
    flexDirection: 'row',
    backgroundColor: 'deepskyblue',
    height: 50,
  },
  catatan: {
    width: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 5,
  },
  hapus: {
    width: '15%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  simpan: {
    position: 'absolute',
    bottom: 75,
    right: 25,
    backgroundColor: 'deepskyblue',
    padding: 10,
    borderRadius: 30,
  },
});