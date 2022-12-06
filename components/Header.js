import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
    return (
       <View style={styles.container}>
        <Image 
            style = {styles.houseImage} 
            source={props.image} 
        />
        <Text style= {styles.text}>{props.text}</Text>
       </View>

    )


  
}

const styles = StyleSheet.create({
    container: {
      
       // Här stylas plaseringen, bilden tillsammans med texten
       backgroundColor: '#fff',
       flexDirection: "row",
       justifyContent: "flex-start",
        padding: 10,
        //marginTop: 10,
     
    },

    houseImage: {

        width: 70,
        height: 70,
        padding: 20,
        
    },

     text: {

       color: "darkturquoise",
       fontSize: 25,
       fontWeight: "bold",
       padding: 20,
        
    },

  });


export default Header;

