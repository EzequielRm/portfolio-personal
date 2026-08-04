"""Aplicación Flask para portfolio personal con formulario de contacto."""

import sqlite3

from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def init_db():
    """Inicializa la base de datos con la tabla de contactos si no existe."""
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY,
            nombre TEXT,
            email TEXT,
            telefono TEXT,
            mensaje TEXT
        )
    ''')
    conn.commit()
    conn.close()


@app.route("/")
def home():
    """Renderiza la página principal del portafolio."""
    return render_template("index.html")


@app.route("/contacto", methods=['GET', 'POST'])
def contacto():
    """Muestra el formulario y guarda los mensajes enviados por el usuario."""
    if request.method == 'GET':
        return render_template("contacto.html")

    data = request.get_json(silent=True)
    if not data:
        return jsonify({"mensaje": "No se recibieron datos válidos"}), 400

    nombre = data.get('name')
    email = data.get('email')
    telefono = data.get('phone')
    mensaje = data.get('message')

    if not all([nombre, email, mensaje]):
        return jsonify({"mensaje": "Faltan campos obligatorios"}), 400

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute(
        "INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)",
        (nombre, email, telefono, mensaje)
    )
    conn.commit()
    conn.close()

    return jsonify({"mensaje": "Datos recibidos correctamente"})


if __name__ == "__main__":
    init_db()
    app.run(debug=True)