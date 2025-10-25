import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: '' },
    description: { type: String, trim: true, required: true },
    amount: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

export default mongoose.model('Donation', DonationSchema);