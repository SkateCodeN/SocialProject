import React, { useState } from "react";
import "./css/framework.css";
import "./css/theme.css";

const CreateEvent = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !title || !description) {
      alert("Please fill out all fields and upload an image.");
      return;
    }
    const eventData = { title, description, image };
    onSubmit(eventData);
  };

  return (
    <div className="card card--full-width">
      <h2 className="align--center heading--large">Create New Event</h2>
      <form onSubmit={handleSubmit} className="form__group" style={{ padding: '1rem' }}>
        
        {/* Event Title */}
        <label htmlFor="title" className="label__required-field">
          Event Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter event title"
        />
        
        {/* Event Description */}
        <label htmlFor="description" className="label__required-field">
          Event Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Enter event description"
        />
        
        {/* Image Upload */}
        <label htmlFor="image" className="label__required-field">
          Upload Event Image:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="framework_input"
        />
        
        {/* Submit Button */}
        <div className="align--center" style={{ marginTop: '1rem' }}>
          <button type="submit" className="button button--blue">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
