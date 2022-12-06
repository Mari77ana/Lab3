import {StyleSheet,  View, Image, Text } from "react-native"
import React from "react";



const Room = (props) => {                          // egenskaper = props,  Innehåller en text och bild, 
    return(                                       // vilken text och bild skrivs i App()
        <View style={styles.container}>
            
             <Image style={styles.img} source = {props.image}/>
             <Text style={styles.text}>{props.text}</Text> 
              
           
        </View>
   
    );
    
};
const styles = StyleSheet.create({
    container: {
      
     backgroundColor: 'darkturquoise',
     padding: 5,

    },

    img: {
         
        width: 100, 
        height: 100,      
    },

    text: {
        textAlign: "center",

    },
    

});

export default Room;