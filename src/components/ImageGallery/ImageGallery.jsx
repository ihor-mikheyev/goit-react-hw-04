import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css"

export default function ImageGallery({ items, onClick}) {
    
  return (
    <ul >
      {items.map((item, index) => {
        return (
          <li key={index}>
            <ImageCard item={item} onClick={()=> onClick(item.urls.regular) } />
          </li>
        );
      })}
    </ul>
  );
}
