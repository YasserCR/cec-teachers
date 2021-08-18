import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logocec.jpg")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.Text}>
        En caso de perder tu contraseña comunicate con el administrador del
        sistema.
      </Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Text: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 30,
    marginLeft: 30,
  },
  logo: {
    width: "100%",
    height: 250,
    marginTop: 20,
    marginBottom: -10,
  },
  viewContainer: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
