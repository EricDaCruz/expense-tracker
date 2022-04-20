import { useState } from 'react'
import * as C from "./styles";
import {Item} from '../../types/Item'

type Props ={ 
   onAdd: (newItem: Item ) => void
}

const InsertInfo = ({onAdd}: Props) => {
   const [date, setDate] = useState('')
   const [category, setCategory] = useState('')
   const [title, setTitle] = useState('')
   const [value, setValue] = useState('')

   const handleAddInfo = () =>{
      let [year, month, day] = date.split('-')
      let newItem: Item = {
         date: new Date(parseInt(year), parseInt(month)-1, parseInt(day)),
         category: category,
         title: title,
         value: parseFloat(value)
      }
   
      onAdd(newItem)
   }

   return (
      <C.Container>
         <C.GroupInput>
            <label>Data</label>
            <input type="date" name="date" onChange={e => setDate(e.target.value)}/>
         </C.GroupInput>
         <C.GroupInput>
            <label>Categoria</label>
            <select id="category" onChange={e => setCategory(e.target.value)}>
               <option selected disabled></option>
               <option value="food">Alimentação</option>
               <option value="rent">Aluguel</option>
               <option value="salary">Salário</option>
            </select>
         </C.GroupInput>
         <C.GroupInput>
            <label>Título</label>
            <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
         </C.GroupInput>
         <C.GroupInput>
            <label>Valor</label>
            <input type="number" name="value" placeholder="0" onChange={e => setValue(e.target.value)}/>
         </C.GroupInput>
         <C.GroupInput hiddenLabel={true} >
             <label>Button Send Info</label>
            <input type="submit" value="Adicionar" onClick={handleAddInfo}/>
         </C.GroupInput>
         
      </C.Container>
   );
};

export default InsertInfo;
