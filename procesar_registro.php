<?php

        // Aquí iría el código de procesamiento del registro
        $email = $_POST['email'];
        $user_password = $_POST['password']; // Cambiado a $user_password para evitar conflicto con la contraseña de la base de datos

        $servername = "localhost";
        $username_db = "juanma"; // Cambiado a $username_db para evitar conflicto con el nombre de usuario de la base de datos
        $password_db = "juanma";
        $database = "usuarios";

        // Crear conexión
        $conn = new mysqli($servername, $username_db, $password_db, $database);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Insertar datos en la base de datos
        $sql = "INSERT INTO users (email, password) VALUES ('$email', '$user_password')"; // Usando $user_password

        if ($conn->query($sql) === TRUE) {
            echo "Registrado con exito!";
        } else {
            echo "Error al registrar usuario: " . $conn->error;
        }

        // Cerrar conexión
        $conn->close();

?>
