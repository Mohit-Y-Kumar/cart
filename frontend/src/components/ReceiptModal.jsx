import React from "react";

const ReceiptModal = ({ receipt, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-primaryBlue">Receipt</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {receipt.user.name}
        </p>
        <p>
          <strong>Email:</strong> {receipt.user.email}
        </p>
        <p>
          <strong>Total:</strong> ${receipt.total}
        </p>
        <p>
          <strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}
        </p>
      </div>

      <button
        className="mt-6 w-full bg-accentBlue text-white px-4 py-2 rounded hover:bg-accentBlue/90 transition"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default ReceiptModal;
