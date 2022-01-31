import React, {useState} from 'react'
import produce from 'immer'
const Notes = (props) =>    // a component that accepts an array as input and returns the notes.
    props.data.map(note=>
       <div>
           {note.text}
       </div> 
    )

export default () => {

 const initialData = [{ text: '' }, { text: '' }];
 const [data, setData] = useState(initialData)

 const handleClick = () => {
     const text = document.querySelector('#noteinput').value.trim()
     if(text) {
        const nextState = produce(data, draftState => {
            draftState.push({ text })
        });
        document.querySelector('#noteinput').value = '';
        setData(nextState)
     }
 }     
               

 return(
     <>
        <input id="noteinput" style={{width: '80%' }} type='text' placeholder='Enter A New Note' />
        <button onClick={() => handleClick()}>Add Note</button>
        <Notes data={data} />
    </>
 ); 

};



////returns a list of notes, from a passed data array.
 //Here, we take the present state as input (data variable), produce it to a new state by 
        //pushing text and then get the next state. This new state is set via setData(nextState). We have also cleared the text input field.  

// const Notes = (props) => props.data.map(note => <div>{note.text}</div>);


// const data = 
//     [{text: 'Hey'}, {text: 'There'}]


// return(
//     <Notes data={data}></Notes>
// )
// }

// export default Notes
