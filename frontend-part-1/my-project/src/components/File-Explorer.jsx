import React, { useState } from "react";

const FileExplorer = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div onClick={() => setExpand(!expand)}>{explorer.name}</div>
      {explorer.items?.map((item) => (
        <div key={item.name} style={{display: expand ? 'block': 'none', paddingLeft: '10px'}}>
          {item.isFolder ? (
            <FileExplorer explorer={item} key={item.name}/>
          ) : (
            <div>{item.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
