// AddCategory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

function AddCategory() {
  const API_URL = 'https://readify-backend.onrender.com/';
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [allCategories, setAllCategories] = useState([]);
  const [recentAddedCategories, setRecentAddedCategories] = useState([]);

  // Fetch all categories
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(API_URL + 'api/categories/allcategories');
        const categoriesOptions = response.data.map((category) => ({
          value: category._id,
          text: category.categoryName,
        }));
        setAllCategories(categoriesOptions);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getAllCategories();
  }, [API_URL]);

  // Add new category
  const addCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL + 'api/categories/addcategory', {
        categoryName,
      });

      if (recentAddedCategories.length >= 5) {
        recentAddedCategories.pop();
      }

      setRecentAddedCategories([response.data, ...recentAddedCategories]);
      setCategoryName('');
      alert('Category Added Successfully 🎉');
    } catch (error) {
      console.error('Error adding category:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <p className="dashboard-option-title">Add a Category</p>
      <div className="dashboard-title-line"></div>
      <form className="addcategory-form" onSubmit={addCategory}>
        <label className="addcategory-form-label" htmlFor="categoryName">
          Category Name<span className="required-field">*</span>
        </label>
        <br />
        <input
          className="addcategory-form-input"
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
        <br />

        <input
          className="addcategory-submit"
          type="submit"
          value="SUBMIT"
          disabled={isLoading}
        />
      </form>
      <div>
        <p className="dashboard-option-title">Recently Added Categories</p>
        <div className="dashboard-title-line"></div>
        <table className="admindashboard-table">
          <tr>
            <th>S.No</th>
            <th>Category Name</th>
            <th>Added Date</th>
          </tr>
          {recentAddedCategories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.categoryName}</td>
              <td>{category.createdAt.substring(0, 10)}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AddCategory;
