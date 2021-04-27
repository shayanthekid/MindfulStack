const { intersection } = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   date:{
       type: Date,
       required: true
   },
   venueStart:{
       type: Number,
       required: true
   },
   venueEnd:{
       type: Number,
       required: true
   },
   seats:{
       type: Number,
       required: true
   },
   price: {
       type: Number,
       required: true
   }

}, {timestamps: true});

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;