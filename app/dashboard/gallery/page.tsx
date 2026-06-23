"use client";

import { useMemo, useState } from "react";
import {
  ImageIcon,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Upload,
  X,
} from "lucide-react";

type GalleryStatus = "active" | "inactive";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  status: GalleryStatus;
  createdAt: string;
};

const initialGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Modern Office Design",
    category: "Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    status: "active",
    createdAt: "2026-06-20",
  },
  {
    id: "2",
    title: "Social Media Campaign",
    category: "Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    status: "active",
    createdAt: "2026-06-18",
  },
  {
    id: "3",
    title: "Brand Identity Design",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    status: "inactive",
    createdAt: "2026-06-15",
  },
];

export default function GalleryManagementPage() {
  const [galleryItems, setGalleryItems] =
    useState<GalleryItem[]>(initialGalleryItems);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageUrl: "",
    status: "active" as GalleryStatus,
  });

  const categories = useMemo(() => {
    return [
      "all",
      ...Array.from(new Set(galleryItems.map((item) => item.category))),
    ];
  }, [galleryItems]);

  const filteredGalleryItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [galleryItems, searchQuery, selectedCategory]);

  const activeCount = galleryItems.filter(
    (item) => item.status === "active",
  ).length;
  const inactiveCount = galleryItems.filter(
    (item) => item.status === "inactive",
  ).length;

  const handleOpenCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: "",
      category: "",
      imageUrl: "",
      status: "active",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      imageUrl: item.imageUrl,
      status: item.status,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.category || !formData.imageUrl) {
      alert("Please fill all required fields");
      return;
    }

    if (editingItem) {
      setGalleryItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                title: formData.title,
                category: formData.category,
                imageUrl: formData.imageUrl,
                status: formData.status,
              }
            : item,
        ),
      );
    } else {
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        title: formData.title,
        category: formData.category,
        imageUrl: formData.imageUrl,
        status: formData.status,
        createdAt: new Date().toISOString().split("T")[0],
      };

      setGalleryItems((prev) => [newItem, ...prev]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this image?");
    if (!confirmed) return;

    setGalleryItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                <ImageIcon className="h-6 w-6" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Gallery Management
                </h1>
                <p className="text-sm text-slate-500">
                  Manage gallery images, categories and visibility status.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleOpenCreateModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add New Image
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total Images</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {galleryItems.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Active Images</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {activeCount}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Inactive Images
            </p>
            <h2 className="mt-2 text-3xl font-bold text-red-500">
              {inactiveCount}
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by title or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredGalleryItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGalleryItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition group-hover:opacity-100">
                    <a
                      href={item.imageUrl}
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition hover:bg-blue-600 hover:text-white"
                    >
                      <Eye className="h-4 w-4" />
                    </a>

                    <button
                      onClick={() => handleOpenEditModal(item)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition hover:bg-amber-500 hover:text-white"
                    >
                      <Edit className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <div>
                    <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <span>Created</span>
                    <span>{item.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <ImageIcon className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No gallery images found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or add a new gallery image.
            </p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingItem ? "Edit Gallery Image" : "Add Gallery Image"}
                </h2>
                <p className="text-sm text-slate-500">
                  Fill the information below to manage gallery item.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter image title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Example: Branding, Marketing, Interior"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Image URL
                </label>
                <div className="relative">
                  <Upload className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Paste image URL"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        imageUrl: e.target.value,
                      }))
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value as GalleryStatus,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {formData.imageUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="h-48 w-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 p-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                {editingItem ? "Update Image" : "Create Image"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
