import axios from "axios";
import { useState } from "react";
import PhotosUploader from "../PhotosUploader.jsx";

export default function AddItemPage() {

  const [myTitle,setMyTitle] = useState('');
  const [myLocation,setMyLocation] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [myDescription,setMyDescription] = useState('');

  async function saveItem(ev) {
    ev.preventDefault();
    try{
      await axios.post('/item', {
          myTitle,
          myLocation,
          addedPhotos,
          myDescription
      });
      alert('This item is added successfully');
    } catch (e) {
        alert('Failed to add item... Please try again...');
    }
  }
  //creates the header and the description for each input section
  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header,description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  //--------------------------------------------------------------

  return (
    <div className="py-40 px-20">
      <form onSubmit={saveItem}>
        <div>
          {preInput('Title', 'Please enter the title for your item.. :)')}
          <textarea type="text" value={myTitle} onChange={ev => setMyTitle(ev.target.value)} placeholder="title, for example: Red Cat Carpet!"/>
          
          {preInput('Location Address', 'Please enter the location where you found the item')}
          <textarea type="text" value={myLocation} onChange={ev => setMyLocation(ev.target.value)} placeholder="location, for example: 123 4th street, Santa Barbara... "/>

          {preInput('Photos','more = better')}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

          {preInput('Description', 'Please add a brief description for this item :3')}
          <textarea type="text" value={myDescription} onChange={ev => setMyDescription(ev.target.value)} placeholder="title, for example: Red Cat Carpet!"/>
        </div>
        
        <button className="my-4">Save</button>
      </form>
    </div>
  );
}