import React from "react";
import firebase from "./firebase";
export const Spellinput = ({ Spell }) => {
  const [name, setName] = React.useState(Spell.name);
  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Spells")
      .doc("id")
      .set({ ...Spell, name });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Spells")
      .doc(Spell.id)
      .delete();
  };

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>update</button>
      <button onClick={onDelete}>delete</button>
    </>
  );
};
