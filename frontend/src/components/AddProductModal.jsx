import React from "react";
import { useProductStore } from "../store/useProductStore";
import {
  Package2Icon, // Changed from Package2
  DollarSignIcon, // Changed from DollarSign
  ImageIcon, // Changed from Image
  PlusCircleIcon, // Changed from PlusCircle
} from "lucide-react";

const AddProductModal = () => {
  const { formData, setFormData, addProduct, loading } = useProductStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
    document.getElementById("add_product_modal").close();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    document.getElementById("add_product_modal").close();
  };
  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">
        <button
          onClick={() => document.getElementById("add_product_modal").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          X
        </button>

        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6">
            {/* PRODUCT NAME INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Name
                </span>
              </label>
              <div className="flex items-center gap-2 border rounded-lg px-3">
                <Package2Icon className="w-5 h-5 text-neutral-content" />

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input border-none w-full focus:outline-none"
                  value={formData?.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PRODUCT PRICE INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="flex items-center gap-2 border rounded-lg px-3">
                <DollarSignIcon className="w-5 h-5 text-neutral-content" />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input border-none w-full focus:outline-none"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Image URL
                </span>
              </label>
              <div className="flex items-center gap-2 border rounded-lg px-3">
                <ImageIcon className="w-5 h-5 text-neutral-content" />
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input border-none w-full focus:outline-none"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* MODAL ACTIONS */}
          <div className="modal-action">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-ghost"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="w-5 h-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <div
        className="modal-backdrop"
        onClick={() => document.getElementById("add_product_modal").close()}
      >
        <button>close</button>
      </div>
    </dialog>
  );
};

export default AddProductModal;
