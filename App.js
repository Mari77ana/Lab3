
import { useState } from 'react';
import {  FlatList, SafeAreaView, StyleSheet, Text, View,  } from 'react-native';
import Header from './components/Header';
import Room from './components/Room';
import Device from './components/Device';




export default function App() {


  // usestate counter som börjar på 0, 
  const [counter, setCounter] = useState(0);
  
  // Array med 3 Objekt
  const devices = [
    {title: "Living Room Lamp"},
    { title: "Heater"},
    { title: "TV"}
  ]

  const count = (value) =>{
    setCounter(value);
  }


      
    return (

      <SafeAreaView style={[styles.container, {
        flexDirection: "column"
        }]}>

        <View style={styles.header}>
          <Header text="SmartHome" 
           image = {require('./assets/house.png')} 
          />
        </View>
       
        <Text style= {styles.textRoom}>Rooms</Text>

        <View style={styles.rooms}>
          <Room 
             text= "Living Room" 
             image = {require('./assets/living-room.png')}
          />
          <Room text= "Bedroom" image = {require('./assets/bed.png')}/>
          <Room text= "Kitchen" image = {require('./assets/kitchen.png')}/>
        </View>
        


        <View>
          <Text style={styles.textDev}>Devices</Text>
          <FlatList
            keyExtractor={(item)=> item.title}
            data={devices}
            renderItem={({ item }) => {
              return <Device item={item} minfunction={count} />
            }}
          />
          
        
         
        </View>
      



        <Text style={styles.textDev}>Total devices on: {counter}</Text>

          
       

      
      </SafeAreaView>


   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
   
  },

  header: {
     flex: 1, 
     flexDirection: "row",
   
      justifyContent: "flex-start",
      alignItems: "space-between", 
       marginTop: 30,
   
  },

  rooms: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    

  },

   textRoom: {
     fontWeight: "bold",
     fontSize: 22,
     marginTop: 10,
     padding: 10
 },

  devices: {
    flex: 3,


  },
  textDev: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: -10,
    left: 10

  },

  
  item: {
    backgroundColor: "yellow",
    padding: 40,
    margin: 10,
    justifyContent: "center"
    
  },

  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 15,
    marginLeft: 10,

  }
    
    

  
  
});
