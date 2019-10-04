import mongoose from "mongoose";

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String, //imagem do spot
    company: String,
    price: Number,
    techs: [String],
    user: {
      //referencia do id do usuario que criou o spot
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default mongoose.model("Spot", SpotSchema);
