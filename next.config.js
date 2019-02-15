const withLess = require('@zeit/next-less')

module.exports = withLess({
  serverRuntimeConfig: { // Will only be available on the server side
  },
  publicRuntimeConfig: { // Will be available on both server and client
    apiUrl: process.env.API_URL || "http://localhost:3001/api",
    allowedImageFileTypes: ['image/jpeg', 'image/png', "image/jpg"],
    allowedImageFileSize: 1, // max file Size in MB
    productImagesBasePath: process.env.IMG_BASE_PATH ? (process.env.IMG_BASE_PATH + '/products/') : ((process.env.API_URL || "http://localhost:3001/api") + "/Productos/downloadImage?filename="),
    dealImagesBasePath: process.env.IMG_BASE_PATH ? (process.env.IMG_BASE_PATH + '/deals/') : ((process.env.API_URL || "http://localhost:3001/api") + "/Ofertas/downloadImage?filename="),
    logoImagesBasePath: process.env.IMG_BASE_PATH ? (process.env.IMG_BASE_PATH + '/logos/') : ((process.env.API_URL || "http://localhost:3001/api") + "/configuracionesClientes/downloadImage?filename=")
  }
})
