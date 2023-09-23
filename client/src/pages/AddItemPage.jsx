import {useState} from "react";
import axios from "axios";

export default function AddItemPage() {

    const [myTitle,setMyTitle] = useState('');
    const [myLocation,setMyLocation] = useState('');
    const [myPhotos,setMyPhotos] = useState([]);
    const [myCondition,setMyCondition] = useState([]);
    const [myDescription,setMyDescription] = useState('');

    //pass the item information into our api
    async function saveItem(ev) {
      ev.preventDefault();
      const itemData = {
        myTitle, myLocation, myPhotos, myCondition, myDescription
      };

      await axios.post('/places', itemData);
    }

    //creates the header and the description for each input section
    function inputHeader(text) {
      return (
        <h2 className="">{text}</h2>
      );
    }
    function inputDescription(text) {
      return (
        <p className="">{text}</p>
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

    return (
        <div>
            <form onSubmit={saveItem}>
              {preInput('Title', 'Please enter the title for your item.. :)')}
              <input type="text" value={myTitle} onChange={ev => setMyTitle(ev.target.value)} placeholder="title, for example: Red Cat Carpet!"/>
        
              {preInput('Location Address', 'Please enter the location where you found the item')}
              <input type="text" value={myLocation} onChange={ev => setMyLocation(ev.target.value)} placeholder="location, for example: 123 4th street, Santa Barbara... "/>

              {preInput('Photos','Please upload pictures for the item. The more the merrier!')}
              <div>UNDERCONSTRUCTION</div>
              {/* <PhotosUploader myPhotos={myPhotos} onChange={setMyPhotos} /> */}

              {preInput('Condition', 'Please select the condition of the item. <3')}
              <div>UNDERCONSTRUCTION</div>

              {preInput('Description', 'Please add a brief description for this item, OR you can let our AI generate the description by clicking the button at the bottom! :3')}
              <input type="text" value={myDescription} onChange={ev => setMyDescription(ev.target.value)} placeholder="title, for example: Red Cat Carpet!"/>

              <button>Click to Autogenerate a Description!</button>
            </form>
        </div>
    );

}