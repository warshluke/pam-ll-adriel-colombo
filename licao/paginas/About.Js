import { View, StyleSheet } from "react-native";

export function folheto(){
    return(
        <View Style={styles.container}>
            <Text>
                Nem sei
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });