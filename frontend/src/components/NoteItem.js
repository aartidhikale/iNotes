import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';


export const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote , viewNote} = props;
    
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title"><b>Title:</b> {note.title}</h5>
                        <p className="card-text"><b>Tag:</b> {note.tag.length>0 ? note.tag : 'Nothing here'}</p>
                        <div className="d-flex justify-content-end align-items-center">
                            <i className="far fa-trash-alt" onClick={() => { deleteNote(note._id);
                                props.showAlert("deleted successfully","success");
                             }}></i>
                            <i className="far fa-edit mx-3" onClick={() => { updateNote(note) }}></i>
                            
                                <button type="button" className="btn btn-outline-info"  onClick={() => { viewNote(note) }}>
                                View Full Note
                                </button>
                                
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}