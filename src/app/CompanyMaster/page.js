"use client";
import React, { useState } from "react";
import "./CompanyMaster.css";

const CompanyMaster = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    registrationNo: "",
    address: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    website: "",
  });

  const [companies, setCompanies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.code) {
      alert("Please fill in all required fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...companies];
      updated[editIndex] = formData;
      setCompanies(updated);
      setEditIndex(null);
    } else {
      setCompanies([...companies, formData]);
    }

    setFormData({
      name: "",
      code: "",
      registrationNo: "",
      address: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      email: "",
      website: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(companies[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = companies.filter((_, i) => i !== index);
    setCompanies(filtered);
  };

  return (
    <div className="company-master">
      <h2>Company Master</h2>

      <form onSubmit={handleSubmit} className="company-form">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Company Name *" required />
        <input name="code" value={formData.code} onChange={handleChange} placeholder="Company Code *" required />
        <input name="registrationNo" value={formData.registrationNo} onChange={handleChange} placeholder="Registration Number" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
        <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />

        <div className="button-group">
          <button type="submit">{editIndex !== null ? "Update" : "Add Company"}</button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                name: "",
                code: "",
                registrationNo: "",
                address: "",
                country: "",
                state: "",
                city: "",
                phone: "",
                email: "",
                website: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </form>

      <table className="company-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Code</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.length === 0 ? (
            <tr>
              <td colSpan="8" align="center">
                No companies found
              </td>
            </tr>
          ) : (
            companies.map((company, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{company.name}</td>
                <td>{company.code}</td>
                <td>{company.email}</td>
                <td>{company.phone}</td>
                <td>{company.city}</td>
                <td>Active</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)} style={{ backgroundColor: "#dc3545", color: "#fff" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyMaster;
