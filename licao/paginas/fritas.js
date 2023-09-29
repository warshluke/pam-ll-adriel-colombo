import {View, Text, Pressable} from "react-native";
import React from "react";
import { Link } from 'expo-router';

export default function Principal() {
  return (
    <View style >
      <Link href="/about">About</Link>

      <Link href="/Ruffles/folheto">View user</Link>

      <Link href="/other" asChild>
          <Pressable>
              <Text>Home</Text>
          </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
