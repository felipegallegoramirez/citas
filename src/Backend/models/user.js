const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    name: {
      type: String,
      require: true
    },
    rol: {
      type: String,
      require: true
    },
    profresion: {
      type: String,
      require: true
    },
    bloq:[{
      day:[{
        type: Number,
        require: true
      }]
    }],
    services:[{
      type: String,
      require: true
    }],
    booking:[{
      type: String,
      require: true
    }]

  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Users", StorageScheme);