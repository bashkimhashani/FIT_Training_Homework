function ProfilPictureStates({pfpUrl}) {
    const [profilPicture, setPfp] = useState("https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/NASA_Earth.jpg?itok=M0aRnEJ5");
    
  return (
    <div>
        <img src={pfpUrl} alt="" />
      <button onClick={RandomProfilePicture()}>Random image</button>
    </div>
      
  );
// `https://bllablla.com/${}x333`
  function RandomProfilePicture() {
    const imagesUrl = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82DCWo0XrgsGm45BdSRVUDuIu75uiBg0ybw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dfW2slvEJW_vlmEKVGZiTJsyUuv8tqXpJm6ph9NZGM6ZVASZevpomq25BDcN8WH1zIY&usqp=CAU", "https://i.pinimg.com/736x/45/c9/90/45c9904e394429d9f43d2cbf4c724cc0.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG9woL6ahySYArzSf_BUmPB6gbd0IXhHmQgTKWeogvYWaoB2kwKenFAoP9tK69jOA6VI&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE1hz6ZhW7-bx7kqxYo9RCVRCP819aa_mSBLqfsrmmfZswqN9Ktdtaxlf-eaOBDjbVDY&usqp=CAU"];
    let randomIndex = Math.floor(Math.random() * imagesUrl.length);

    profilPicture = imagesUrl[randomIndex]; 
    setPfp(profilPicture);

    }
}

export default ProfilPictureStates;