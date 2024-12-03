const path = require('path');
//const db = require('db');

module.exports = {
  entry: './src/index.js',  // Punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
    filename: 'bundle.js'                    // Archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Regla para archivos CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,                 // Transpilar archivos JS y JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000
  }
};
