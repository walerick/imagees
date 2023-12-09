import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ImageData from "../ImageData";

const Puzzle = () => {
  const [images, updatedImages] = useState(ImageData);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updatedImages(items);
  }
  return (
    <div className="puzzle">
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

export default Puzzle;
