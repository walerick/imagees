import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const imageData = [
  {
    id: "image1",
    url: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["#nature"],
  },
  {
    id: "image2",
    url: "https://plus.unsplash.com/premium_photo-1673296129756-e45408e25250?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["#animal"],
  },
  {
    id: "image3",
    url: "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["#city"],
  },
];

const Gallery = () => {
  const [images, updatedImages] = useState(imageData);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updatedImages(items);
  }
  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>MY PICTURES</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {images.map(({ id, url, tag }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className="image-url">
                            <img src={url} alt={`${id} link`} />
                          </div>
                          <p>{tag}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default Gallery;
