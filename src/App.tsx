import React, {ReactNode} from "react";
import { View, StatusBar, StyleSheet, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppNavigator from "./navigation/AppNavigator";

interface StandardContainerProps{
  children: ReactNode;
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ocupa toda la pantalla pero respeta márgenes seguros
  },
  container: {
    flex: 1, // Permite que el contenido crezca dentro del área segura
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Evita solapamiento en Android
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

const StandardContainer: React.FC<StandardContainerProps> = ({ children }) => {
  return(
          <SafeAreaView style={ [styles.safeArea] }>
            <View style={styles.container}>
              { children } 
            </View>
          </SafeAreaView>
  )
}


const App = () => {
  return (
        <AppNavigator />
  );
};

export default App;