import React, { useEffect, useState } from "react";
import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import ImageThumb from "../ImageThumb";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [item, setItems] = useState(ImageThumb);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const nameItems = [...new Set(ImageThumb.map((val) => val.name))];

  const filterItems = (cat) => {
    const newItems = ImageThumb.filter((newVal) => newVal.name == cat);
    setItems(newItems);
  };

  return (
    <div className="gallery">
      <header>
        <nav>
          <h3>Imagee Puzzle</h3>
          <Button variant="contained">Download now</Button>
        </nav>
        <div className="hero-content">
          <h1>Imagee Puzzle</h1>
          <p>Arrange the pictures in five minutes</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            placeat sint, adipisci magni voluptate harum assumenda autem veniam
            cum, hic consequatur quod fugit odit id veritatis non accusantium
            omnis illum?
          </p>
          <Button variant="contained">Download now</Button>
        </div>
      </header>
      {ImageThumb && (
        <main>
          <div className="intro">
            <h2>Put in Use some Tags</h2>
            {nameItems.map((val) => (
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px", marginRight: "1rem" }}
                onClick={() => filterItems(val)}
              >
                {val}
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", marginRight: "1rem" }}
              onClick={() => setItems(ImageThumb)}
            >
              All
            </Button>
          </div>
          <Box sx={{ width: "100%" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {item.map((val) => (
                <Link to={"puzzle" + val.id}>
                  <ImageListItem key={val.id}>
                    <img
                      srcSet={`${val.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${val.url}?w=248&fit=crop&auto=format`}
                      alt={val.tags}
                      loading="lazy"
                    />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </Box>
        </main>
      )}
    </div>
  );
};

export default Gallery;
