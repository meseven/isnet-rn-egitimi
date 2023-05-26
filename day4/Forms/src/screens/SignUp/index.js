import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useFormik } from "formik";
import validationSchema from "./validations";

const SignUp = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === "test@test.com") {
        return bag.setFieldError("email", "This e-mail is already in use");
      }

      bag.resetForm();
      alert("form gönderildi");
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Name"
          style={[
            styles.input,
            errors.name && touched.name && styles.inputError,
          ]}
          value={values.name}
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          editable={!isSubmitting}
        />
        {errors.name && touched.name && (
          <Text style={styles.error}>{errors.name}</Text>
        )}
      </View>

      <View>
        <TextInput
          placeholder="E-mail"
          style={[
            styles.input,
            errors.email && touched.email && styles.inputError,
          ]}
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          editable={!isSubmitting}
        />
        {errors.email && touched.email && (
          <Text style={styles.error}>{errors.email}</Text>
        )}
      </View>

      <View>
        <TextInput
          placeholder="Password"
          style={[
            styles.input,
            errors.password && touched.password && styles.inputError,
          ]}
          secureTextEntry
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          editable={!isSubmitting}
        />
        {errors.password && touched.password && (
          <Text style={styles.error}>{errors.password}</Text>
        )}
      </View>

      <View>
        <TextInput
          placeholder="Confirm password"
          style={[
            styles.input,
            errors.confirmPassword &&
              touched.confirmPassword &&
              styles.inputError,
          ]}
          secureTextEntry
          value={values.confirmPassword}
          onChangeText={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
          editable={!isSubmitting}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        )}
      </View>

      <Button
        title={isSubmitting ? "Loading..." : "Register"}
        disabled={isSubmitting}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    fontSize: 20,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
  },
});
