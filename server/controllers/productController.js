const {GetObjectCommand} = require('@aws-sdk/client-s3');
const {getSignedUrl, ListObjectsV2} = require('@aws-sdk/s3-request-presigner');
const PRODUCTS = require('../models/Products');
const USER = require('../models/Auth');
const jwt = require('jsonwebtoken');
const {client, bucketName} = require('../utils/s3Client');

// const addProductToDB = async product => {
//   const imageKey = `Products_img/${product._id}.jpeg`;
//   const command = new GetObjectCommand({
//     Bucket: bucketName,
//     Key: imageKey,
//   });
//
//   const url = await getSignedUrl(client, command, {expiresIn: 3600});
//   const newProduct = new PRODUCTS({
//     _id: product._id,
//     imageUrl: url,
//   });
//   console.log('EEEnewProduct:', newProduct);
//
//   await newProduct.save();
//   return newProduct;
// };

const getUrlsForProducts = async products => {
  const updatedProducts = await Promise.all(
    products.map(async product => {
      if (product) {
        const imageKey = `Products_img/${product._id}.jpeg`;
        const command = new GetObjectCommand({
          Bucket: bucketName,
          Key: imageKey,
        });

        try {
          const url = await getSignedUrl(client, command, {expiresIn: 3600});
          console.log('Myurl:', url);
          const updateDoc = {
            $set: {
              imageUrl: url,
            },
          };
          const updatedProduct = await PRODUCTS.findByIdAndUpdate(
            product._id,
            updateDoc,
            {new: true},
          );
          return updatedProduct;
        } catch (error) {
          console.error('Error generating signed URL', error);
          return product;
        }
      }
      return products;
    }),
  );

  return updatedProducts;
};

const getProducts = async (req, res) => {
  try {
    const products = await PRODUCTS.find({});

    const updatedProducts = await getUrlsForProducts(products);

    res.status(200).json({updatedProducts});
  } catch (error) {
    res.status(500).json({message: 'Error during getting products!'});
  }
};
const saveLikedProduct = async (req, res) => {
  const {productId} = req.params;
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log('decoded1:', decoded);
      const user = await USER.findById(decoded.id);
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      const updatedUser = await USER.findByIdAndUpdate(
        decoded.id,
        {$addToSet: {likedProducts: productId}},
        {new: true},
      ).populate('likedProducts');

      console.log('updatedUser:', updatedUser);
      if (!updatedUser) {
        return res.status(404).json({message: 'User not found'});
      } else {
        return res.status(200).json(updatedUser.likedProducts);
      }
    } catch (error) {
      console.error('Error in getLikedProducts:', error);
      res.status(401).json({message: 'Unauthorized'});
    }
  } catch (error) {
    res.status(500).json({message: 'Error during getting liked products!'});
  }
};

const fetchLikedProducts = async (req, res) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log('decoded2:', decoded);
      const user = await USER.findById(decoded.id).populate('likedProducts');
      console.log('fetchLikedProducts_user:', user);
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      return res.status(200).json(user.likedProducts);
    } catch (error) {
      console.error('Error in getLikedProducts:', error);
      res.status(401).json({message: 'Unauthorized'});
    }
  } catch (error) {
    res.status(500).json({message: 'Error during getting liked products!'});
  }
};
const deleteLikedProduct = async (req, res) => {
  const {productId} = req.params;
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log('decoded3:', decoded);
      const user = await USER.findById(decoded.id);
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      const updatedUser = await USER.findByIdAndUpdate(
        decoded.id,
        {$pull: {likedProducts: productId}},
        {new: true},
      ).populate('likedProducts');
      if (!updatedUser) {
        return res.status(404).json({message: 'User not found'});
      } else {
        return res.status(200).json(updatedUser.likedProducts);
      }
    } catch (error) {
      console.error('Error in getLikedProducts:', error);
      res.status(401).json({message: 'Unauthorized'});
    }
  } catch (error) {
    res.status(500).json({message: 'Error during getting liked products!'});
  }
};

module.exports = {
  getProducts,
  saveLikedProduct,
  fetchLikedProducts,
  deleteLikedProduct,
};
